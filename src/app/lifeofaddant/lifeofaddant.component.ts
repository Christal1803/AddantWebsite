import { Component, OnInit } from '@angular/core';
import { InstagramDOMService } from '../instagram-dom.service';

@Component({
  selector: 'app-lifeofaddant',
  templateUrl: './lifeofaddant.component.html',
  styleUrls: ['./lifeofaddant.component.css']
})
export class LifeofaddantComponent implements OnInit {

  constructor(private instagram: InstagramDOMService) { }

  ngOnInit(): void {
    this.instagram.processEmbeddedInstagramPosts();
  }

}
