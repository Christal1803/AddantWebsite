import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudsolutionsComponent } from './cloudsolutions.component';

describe('CloudsolutionsComponent', () => {
  let component: CloudsolutionsComponent;
  let fixture: ComponentFixture<CloudsolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudsolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudsolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
