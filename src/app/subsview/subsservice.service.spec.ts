import { TestBed } from '@angular/core/testing';

import { SubsserviceService } from './subsservice.service';

describe('SubsserviceService', () => {
  let service: SubsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
