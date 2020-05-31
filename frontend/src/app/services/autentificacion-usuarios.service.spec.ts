import { TestBed } from '@angular/core/testing';

import { AutentificacionUsuariosService } from './autentificacion-usuarios.service';

describe('AutentificacionUsuariosService', () => {
  let service: AutentificacionUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentificacionUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
