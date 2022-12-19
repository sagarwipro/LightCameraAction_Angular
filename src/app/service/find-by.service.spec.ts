import { TestBed } from '@angular/core/testing';

import { FindByService } from './find-by.service';

describe('FindByService', () => {
  let service: FindByService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindByService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
