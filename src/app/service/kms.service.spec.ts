import { TestBed } from '@angular/core/testing';

import { KmsService } from './kms.service';

describe('KmsService', () => {
  let service: KmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
