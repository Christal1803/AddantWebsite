import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loadetail',
  templateUrl: './loadetail.component.html',
  styleUrls: ['./loadetail.component.css']
})
export class LoadetailComponent implements OnInit {

  public href: any;
  public id: any;
  public IdAddantLife: any;
  public eventdetail: any;
  public Description: any;
  public title: any;
  public url2: any;
  public url: any;
  public galleryArray: any;
  public datas: any=[];
  public urlGalleryArray: any;
  public srcUrl: any;
  array: any;

  items!: GalleryItem[];

  constructor(private _apiService: BlogService, private Activatedroute: ActivatedRoute,
    private router: Router,public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
    var replace = this.href.replaceAll("/", " ");
    console.log(replace);
    this.id = replace.split(" ");
    this.IdAddantLife = this.id[2]
    console.log(this.IdAddantLife)
    this.getEventbyId();
  }


  getEventbyId() {
    debugger
    this._apiService.getEventByID(this.IdAddantLife).subscribe((response: any) => {
      if (response) {
        this.eventdetail = response;
        console.log(this.eventdetail)
        debugger
        this.url2 = this.eventdetail[0].CoverImgUrl;
        this.url = this.eventdetail[0].BannerImgUrl;
        this.Description = this.eventdetail[0].Description;
        this.title = this.eventdetail[0].Title;
        //console.log(this.Event_id)
        this.getGalleryArray(this.IdAddantLife)

      }
    })
  }


  getGalleryArray(IdAddantLife: any) {
    debugger
    this._apiService.getGalleryArray(IdAddantLife)
      .subscribe((response: any) => {
        if (response) {
          console.log(response)

          debugger
          this.galleryArray = response;
          this.datas = this.galleryArray;
          console.log(this.datas)



          this.array= new Array<playerConfirmation>();
          for (let x of this.galleryArray) {

         
            let details = new playerConfirmation;
            
            details.badge = x.InnerCaption;
            details.playersD = x.InnerImageUrl;
            this.array.push(details);
            console.log(this.array)

          }
          //imageData = this.array;


          console.log(this.galleryArray);

          this.items = this.datas.map((item: { InnerImageUrl: any; InnerCaption: any; }) => new ImageItem({ src: item.InnerImageUrl, thumb: item.InnerCaption }));


          /** Lightbox Example */

          // Get a lightbox gallery ref
          const lightboxRef = this.gallery.ref('lightbox');


          // Add custom gallery config to the lightbox (optional)
          lightboxRef.setConfig({
            imageSize: ImageSize.Cover,
            thumbPosition: ThumbnailsPosition.Top
          });

          // Load items into the lightbox gallery ref
          lightboxRef.load(this.items)








        } else {
          console.log("hello error")
        }
        //this.galleryArrayForm.setControl('galleryDetails', this.setExistingGallery(this.galleryArray));
        //console.log(this.galleryArrayForm.value)

      });
  }
}







export class playerConfirmation {
  public badge: any;
  public playersD: any;
}
