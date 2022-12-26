import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebapplicationsComponent } from './webapplications.component';

describe('WebapplicationsComponent', () => {
  let component: WebapplicationsComponent;
  let fixture: ComponentFixture<WebapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
