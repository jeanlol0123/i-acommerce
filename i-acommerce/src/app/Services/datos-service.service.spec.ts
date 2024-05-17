import { TestBed } from '@angular/core/testing';

import { DatosServiceService } from './datos-service.service';

describe('DatosServiceService', () => {
  let service: DatosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
