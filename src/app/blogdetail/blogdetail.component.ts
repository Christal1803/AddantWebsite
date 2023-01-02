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
  public IdBlog: any;
  public fbLink: any;
  public linkedinLink: any;

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
        this.IdBlog = this.blogdetail.IdBlog;
      }
    })

    this._apiService.getBlogDetail().subscribe((response: any) => {
      if (response) {
        this.blog = response;
        console.log(this.blog)
      }
    })
  }
 


  name!: string;

  /* To copy Text from Textbox */
  copyInputMessage(inputElement: { select: () => void; setSelectionRange: (arg0: number, arg1: number) => void; }) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  /* To copy any Text */
  copyText(val: any) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'https://addant.com/detail/'+ val;
    console.log(selBox.value);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    
  }

  shareFb(val:any) {
    this.fbLink = 'https://www.facebook.com/sharer/sharer.php?u=https://addant.com/detail/' + val;

  }
  shareLinked(val: any){ 
    this.linkedinLink = 'https://www.linkedin.com/sharing/share-offsite/?url=http://addantwebsite-001-site1.htempurl.com/detail/' + val;
  }




}



