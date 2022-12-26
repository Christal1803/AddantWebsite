import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinomanagementsystemComponent } from './casinomanagementsystem.component';

describe('CasinomanagementsystemComponent', () => {
  let component: CasinomanagementsystemComponent;
  let fixture: ComponentFixture<CasinomanagementsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinomanagementsystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinomanagementsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
