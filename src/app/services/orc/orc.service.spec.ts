import { TestBed } from '@angular/core/testing';

import { OrcService } from './orc.service';

describe('OrcService', () => {
  let service: OrcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
