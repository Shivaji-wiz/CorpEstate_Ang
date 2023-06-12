import { TestBed } from '@angular/core/testing';

import { CRUDFunctionsService } from './crud-functions.service';

describe('CRUDFunctionsService', () => {
  let service: CRUDFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
