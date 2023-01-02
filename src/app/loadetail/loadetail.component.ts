import { Component, OnInit } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
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
  public urlGalleryArray: any;
  constructor(private _apiService: BlogService, private Activatedroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
    var replace = this.href.replaceAll("/", " ");
    console.log(replace);
    this.id = replace.split(" ");
    this.IdAddantLife = this.id[2]
    console.log(this.IdAddantLife)
    this.getEventbyId();
  }


  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };


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
        //this.getGalleryArray(this.IdAddantLife)

      }
    })

  }


  getGalleryArray(IdAddantLife: any) {
    debugger
    this._apiService.getGalleryArray(IdAddantLife)
      .subscribe((response: any) => {
        if (response) {
          debugger
          this.galleryArray = response;
          for (let file of this.galleryArray) {
            debugger

            this.urlGalleryArray.push(file.InnerImageUrl, file.InnerCaption)
          }
          console.log(this.galleryArray);
          console.log(this.urlGalleryArray)
        } else {
          console.log("hello error")
        }
        //this.galleryArrayForm.setControl('galleryDetails', this.setExistingGallery(this.galleryArray));
        //console.log(this.galleryArrayForm.value)

      });
  }
}
