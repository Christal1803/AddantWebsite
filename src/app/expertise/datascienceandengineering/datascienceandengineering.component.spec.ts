import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatascienceandengineeringComponent } from './datascienceandengineering.component';

describe('DatascienceandengineeringComponent', () => {
  let component: DatascienceandengineeringComponent;
  let fixture: ComponentFixture<DatascienceandengineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatascienceandengineeringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatascienceandengineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
