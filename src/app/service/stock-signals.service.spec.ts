import { TestBed } from '@angular/core/testing';

import { StockSignalsService } from './stock-signals.service';

describe('StockSignalsService', () => {
  let service: StockSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
