import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BloggComponent } from './blogg/blogg.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { CareerComponent } from './career/career.component';
import { LifeofaddantComponent } from './lifeofaddant/lifeofaddant.component';
import { LoadetailComponent } from './loadetail/loadetail.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ExperticeComponent } from './expertice/expertice.component';
import { InstagramDOMService } from './instagram-dom.service';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CookiesComponent,
    PrivacyComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BloggComponent,
    BlogdetailComponent,
    CareerComponent,
    LifeofaddantComponent,
    LoadetailComponent,
    ScrollTopComponent,
    ExperticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LightgalleryModule,
    NgbAccordionModule,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule,
    TabsModule.forRoot()


  ],
  providers: [HttpClientModule, InstagramDOMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
