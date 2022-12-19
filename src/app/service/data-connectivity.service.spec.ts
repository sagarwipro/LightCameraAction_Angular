import { TestBed } from '@angular/core/testing';

import { DataConnectivityService } from './data-connectivity.service';

describe('DataConnectivityService', () => {
  let service: DataConnectivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataConnectivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
