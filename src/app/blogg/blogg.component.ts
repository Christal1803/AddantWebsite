import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogg',
  templateUrl: './blogg.component.html',
  styleUrls: ['./blogg.component.css']
})
export class BloggComponent implements OnInit {
  public blog: any;
  constructor(private _apiService: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
  }
  getBlog() {
    this._apiService.getBlogDetail().subscribe((response: any) => {
      if (response) {
        this.blog = response;
        console.log(this.blog)
      }
    })
  }
}
