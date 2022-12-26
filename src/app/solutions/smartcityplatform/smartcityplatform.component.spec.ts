import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcityplatformComponent } from './smartcityplatform.component';

describe('SmartcityplatformComponent', () => {
  let component: SmartcityplatformComponent;
  let fixture: ComponentFixture<SmartcityplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartcityplatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartcityplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
