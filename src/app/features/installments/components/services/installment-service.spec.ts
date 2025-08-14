import { TestBed } from '@angular/core/testing';

import { InstallmentService } from './installment-service';

describe('InstallmentService', () => {
  let service: InstallmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstallmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
