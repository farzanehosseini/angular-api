import { TestBed } from '@angular/core/testing';

import { SenddatatoserverService } from './senddatatoserver.service';

describe('SenddatatoserverService', () => {
  let service: SenddatatoserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenddatatoserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
