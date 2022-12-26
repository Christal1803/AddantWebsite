import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsDetailComponent } from './blogs-detail/blogs-detail.component';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogsDetailComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
