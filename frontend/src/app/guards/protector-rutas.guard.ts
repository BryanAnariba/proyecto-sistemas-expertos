import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutentificacionUsuariosService } from '../services/autentificacion-usuarios.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProtectorRutasGuard implements CanActivate {

  constructor (private autenticacionUsuario: AutentificacionUsuariosService , private router: Router) {

  }


  // EL GUARD PROTEJE NADA MAS LAS RUTAS DEL FRONTEND, YA QUE ANGULAR ES FRAMEWORK FRONTEND
  canActivate(): boolean {
    if (this.autenticacionUsuario.verificandoLogueoUsuario()) {
      return true;
    }

    this.router.navigate(['/login-user']);
    return false;
  }
}
