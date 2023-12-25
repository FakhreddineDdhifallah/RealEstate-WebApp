import { TestBed } from '@angular/core/testing';

import { RealestateService } from './realestate.service';

describe('RealestateService', () => {
  let service: RealestateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealestateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
