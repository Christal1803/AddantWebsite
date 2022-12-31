import { TestBed } from '@angular/core/testing';

import { InstagramDOMService } from './instagram-dom.service';

describe('InstagramDOMService', () => {
  let service: InstagramDOMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramDOMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
