import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdetailComponent } from './blogdetail.component';

describe('BlogdetailComponent', () => {
  let component: BlogdetailComponent;
  let fixture: ComponentFixture<BlogdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
