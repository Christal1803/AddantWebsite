import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeofaddantComponent } from './lifeofaddant.component';

describe('LifeofaddantComponent', () => {
  let component: LifeofaddantComponent;
  let fixture: ComponentFixture<LifeofaddantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeofaddantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeofaddantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
