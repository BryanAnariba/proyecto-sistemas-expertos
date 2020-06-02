import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  SERVER_URL: string = 'http://localhost:3500/usuarios';
  constructor(private httpClient: HttpClient) { }

  // Obtener datos del usuario
  getDataUser (idUsuario): Observable <any> {
    return this.httpClient.get(`${ this.SERVER_URL }/${ idUsuario }` , {});
  }


  // Cambiar correo electronico usuario
  cambiaCorreo (idUsuario , dataUser): Observable <any> {
    return this.httpClient.put(`${ this.SERVER_URL }/${ idUsuario }/cambio-correo` , {
      correoPersona: dataUser.correoPersona ,
      nuevoCorreoPersona: dataUser.nuevoCorreoPersona
    });
  }

  // Cambiar password
  cambiaClave(idUsuario , dataUser): Observable <any> {
    return this.httpClient.put(`${ this.SERVER_URL }/${ idUsuario }/cambio-password` , {
      nuevoPasswordPersona: dataUser.PasswordPersona
    });
  }
}
