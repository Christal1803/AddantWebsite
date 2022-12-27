import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
//import { filter, } from  'rxjs/add/operator/filter';
@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
  public blogdetail: any;
  public idblog: any;
  public href: any;
  public id: any;
  public idBlog: any;
  public MainHeader: any;
  public ProfilePicUrl: any;
  public CreatedBy: any;
  public blog: any;
  public CreatedOn: any;
  public MinReadTime: any;
  public BannerImgUrl: any;
  public BlogContent: any;

  constructor(private _apiService: BlogService, private Activatedroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
    var replace = this.href.replaceAll("/", " ");
    console.log(replace);
    this.id = replace.split(" ");
    this.idBlog = this.id[2]
    console.log(this.idBlog)
    this.getBlogbyId();
   
  }
  getBlogbyId() {
    debugger
    this._apiService.getBlogDetailByID(this.idBlog).subscribe((response: any) => {
      if (response) {
        this.blogdetail = response;
        console.log(this.blogdetail)
        this.MainHeader = this.blogdetail.MainHeader;
        this.ProfilePicUrl = this.blogdetail.ProfilePicUrl;
        this.CreatedBy = this.blogdetail.CreatedBy;
        this.CreatedOn = this.blogdetail.CreatedOn;
        this.MinReadTime = this.blogdetail.MinReadTime;
        this.BannerImgUrl = this.blogdetail.BannerImgUrl;
        this.BlogContent = this.blogdetail.BlogContent;
      }
    })
    this._apiService.getBlogDetail().subscribe((response: any) => {
      if (response) {
        this.blog = response;
        console.log(this.blog)
      }
    })
  }
 
}
