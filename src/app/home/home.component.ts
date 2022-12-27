import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    autoplay: true,
    autoplaySpeed: 50,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 7000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1.5
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3.5
      }
    },
    nav: true
  }

}
