import { TestBed } from '@angular/core/testing';

import { AnotherProductServiceService } from './another-product-service.service';

describe('AnotherProductServiceService', () => {
  let service: AnotherProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotherProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
