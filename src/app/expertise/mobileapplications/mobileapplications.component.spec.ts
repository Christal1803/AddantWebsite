import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileapplicationsComponent } from './mobileapplications.component';

describe('MobileapplicationsComponent', () => {
  let component: MobileapplicationsComponent;
  let fixture: ComponentFixture<MobileapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
