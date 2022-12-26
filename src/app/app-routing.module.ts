import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogRoutingModule } from './blog/blog-routing.module';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { BloggComponent } from './blogg/blogg.component';
import { CareerComponent } from './career/career.component';
import { CareersRoutingModule } from './careers/careers-routing.module';
import { ContactComponent } from './contact/contact.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ExpertiseRoutingModule } from './expertise/expertise-routing.module';
import { HomeComponent } from './home/home.component';
import { LifeofaddantComponent } from './lifeofaddant/lifeofaddant.component';
import { LoadetailComponent } from './loadetail/loadetail.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SmartcityplatformComponent } from './solutions/smartcityplatform/smartcityplatform.component';
import { SolutionsRoutingModule } from './solutions/solutions-routing.module';
import { SolutionsComponent } from './solutions/solutions/solutions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs', component: BloggComponent },
  { path: 'detail/:id', component: BlogdetailComponent },
  { path: 'lifeataddant', component: LifeofaddantComponent },
  { path: 'funday', component: LoadetailComponent },
  { path: 'solutions', loadChildren: () => SolutionsRoutingModule },
  { path: 'careers', component: CareerComponent },
  { path: 'expertise', loadChildren: () => ExpertiseRoutingModule },
  { path: 'cookies', component: CookiesComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
