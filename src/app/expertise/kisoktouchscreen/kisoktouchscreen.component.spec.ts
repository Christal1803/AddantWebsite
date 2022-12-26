import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisoktouchscreenComponent } from './kisoktouchscreen.component';

describe('KisoktouchscreenComponent', () => {
  let component: KisoktouchscreenComponent;
  let fixture: ComponentFixture<KisoktouchscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KisoktouchscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KisoktouchscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
