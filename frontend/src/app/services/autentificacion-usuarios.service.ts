import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AutentificacionUsuariosService {
  constructor(private httpClient: HttpClient, private router: Router) { }
  // 1 - Registrar un nuevo usuario a la plataforma
  crearUsuario (usuario:any): Observable<any> {
    return this.httpClient.post(`http://localhost:3500/usuarios/registro` , {
      nombresPersona: usuario.nombresPersona ,
      apellidosPersona: usuario.apellidosPersona ,
      generoPersona: usuario.generoPersona ,
      correoPersona: usuario.correoPersona ,
      passwordPersona: usuario.passwordPersona ,
      fechaNacimiento: usuario.fechaNacimiento
    });
  }


  // 2 - Logueo de usuario para lo cual se necesitan las credenciales
  logueoUsuario (credenciales: any): Observable <any> {
    return this.httpClient.post(`http://localhost:3500/usuarios/login` , {
      correoPersona: credenciales.correoPersona ,
      passwordPersona: credenciales.passwordPersona
    });
  }


  // Funcion para verificar si el usuario esta logueado, si es asi puede navegar por las rutas si no bye my ciela ajajaja
  verificandoLogueoUsuario(): boolean {
    // si hay token retornalo
    return !!localStorage.getItem('token');
  }

  // Cerrar Sesion
  logOut () {
    // Borramos token
    localStorage.removeItem('token');

    // Redirigmos al inicio login
    this.router.navigate(['/login-user']);
  }

  // Mandar el token al servicio interceptor
  getToken() {
    return localStorage.getItem('token');
  }
}
