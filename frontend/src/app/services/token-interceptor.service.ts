import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AutentificacionUsuariosService } from './autentificacion-usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private autentificacionUsuario: AutentificacionUsuariosService) { }

  intercept(req, next) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.autentificacionUsuario.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }

}
