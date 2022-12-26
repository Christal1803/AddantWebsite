import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsDetailComponent } from './blogs-detail/blogs-detail.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'blog-indetail', component: BlogsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
