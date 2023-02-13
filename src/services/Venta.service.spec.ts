
import { TestBed } from '@angular/core/testing';

import { VentaService } from './Venta.service';

describe('VentaService', () => {
  let service: VentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});