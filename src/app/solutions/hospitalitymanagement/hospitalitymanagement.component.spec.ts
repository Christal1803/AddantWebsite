import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalitymanagementComponent } from './hospitalitymanagement.component';

describe('HospitalitymanagementComponent', () => {
  let component: HospitalitymanagementComponent;
  let fixture: ComponentFixture<HospitalitymanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalitymanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalitymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
