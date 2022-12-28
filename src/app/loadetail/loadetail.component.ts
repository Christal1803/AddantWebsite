import { Component, OnInit } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'app-loadetail',
  templateUrl: './loadetail.component.html',
  styleUrls: ['./loadetail.component.css']
})
export class LoadetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

}
