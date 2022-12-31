import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperticeComponent } from './expertice.component';

describe('ExperticeComponent', () => {
  let component: ExperticeComponent;
  let fixture: ComponentFixture<ExperticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
