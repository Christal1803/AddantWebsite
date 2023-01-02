import { Component, OnInit } from '@angular/core';
import { InstagramDOMService } from '../instagram-dom.service';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-lifeofaddant',
  templateUrl: './lifeofaddant.component.html',
  styleUrls: ['./lifeofaddant.component.css']
})
export class LifeofaddantComponent implements OnInit {
  public search: any;
  public startDate: any;
  public endDate: any;
  public gallery: any;
  public eventdetail: any;
  public Description: any;
  constructor(private instagram: InstagramDOMService, private _apiService: BlogService) { }

  ngOnInit(): void {
    this.instagram.processEmbeddedInstagramPosts();
    this.getGallery();

  }
  getGallery() {
    debugger

    this.search ="";
    this.startDate = "" ;
    this.endDate = "";
    console.log(this.startDate, this.endDate, this.search)
    this._apiService.getGallery(this.search, this.startDate, this.endDate)
      .subscribe((response: any) => {
        if (response) {
          this.gallery = response;
          //this.filterForm.reset();
          console.log(this.gallery);
        } else {
          console.log("hello error")
        }
      });
  }

  
}
