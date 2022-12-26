import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  public blog: any;
  constructor(private _apiService: BlogsService) {
    this.getBlog();
}

  ngOnInit(): void {
    this.getBlog();
  }
  getBlog() {
    this._apiService.getBlogDetail().subscribe((response: any) => {
      if (response) {
        this.blog = response;
      } 
    })
  }
}
