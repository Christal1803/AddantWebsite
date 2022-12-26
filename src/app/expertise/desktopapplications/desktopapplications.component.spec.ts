import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopapplicationsComponent } from './desktopapplications.component';

describe('DesktopapplicationsComponent', () => {
  let component: DesktopapplicationsComponent;
  let fixture: ComponentFixture<DesktopapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
