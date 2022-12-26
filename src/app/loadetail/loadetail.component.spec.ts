import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadetailComponent } from './loadetail.component';

describe('LoadetailComponent', () => {
  let component: LoadetailComponent;
  let fixture: ComponentFixture<LoadetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
