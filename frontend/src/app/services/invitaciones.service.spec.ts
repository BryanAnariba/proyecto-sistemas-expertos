import { TestBed } from '@angular/core/testing';

import { InvitacionesService } from './invitaciones.service';

describe('InvitacionesService', () => {
  let service: InvitacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
