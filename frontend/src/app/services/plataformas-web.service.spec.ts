import { TestBed } from '@angular/core/testing';

import { PlataformasWebService } from './plataformas-web.service';

describe('PlataformasWebService', () => {
  let service: PlataformasWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlataformasWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
