import { TestBed } from '@angular/core/testing';

import { ProtectorRutasGuard } from './protector-rutas.guard';

describe('ProtectorRutasGuard', () => {
  let guard: ProtectorRutasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectorRutasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
