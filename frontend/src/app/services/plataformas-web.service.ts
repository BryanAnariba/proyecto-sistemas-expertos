import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlataformasWebService {
  SERVER_URL: string = 'http://localhost:3500/sitios';
  constructor(private httpClient: HttpClient) { }
  // Crear una nueva plataforma
  crearPlataforma (idUsuario , nombreUsuario , dataPlataforma): Observable <any> {
    return this.httpClient.post(`${ this.SERVER_URL }` , {
      nombreSitioWeb: dataPlataforma.nombreSitioWeb ,
      descripcion: dataPlataforma.descripcion ,
      idCreadorSitioWeb: idUsuario ,
      nombreCreadorSitioWeb: nombreUsuario ,
      contenido: dataPlataforma.contenido
    });
  }

  // Obtener plataformas de un usuario seleccionado
  obtenerPlataformas (idUsuario): Observable <any> {
    return this.httpClient.get(`${ this.SERVER_URL }/${ idUsuario }`,{});
  }

  // Anexar un nuevo sitio creado por el administrador
  agregarNuevoSitio (idUsuario:string , dataPlataforma: any): Observable <any> {
    return this.httpClient.put(`${ this.SERVER_URL }/${ idUsuario }` , {
      nombreSitioWeb: dataPlataforma.nombreSitioWeb ,
      descripcion: dataPlataforma.descripcion ,
      contenido: dataPlataforma.contenido
    });
  }

  // Obtener una sola plataforma y el contenido
  devuelveContenido (idUsuario , idPlataforma): Observable <any> {
    return this.httpClient.get(`${ this.SERVER_URL }/${ idUsuario }/contenido/${ idPlataforma }` , {});
  }

  // Guardar cambios realizados en un blog
  guardarCambioc (idUsuario , idPlataforma , contenido): Observable <any> {
    return this.httpClient.put(`${ this.SERVER_URL }/${ idUsuario }/contenido/${ idPlataforma }` ,{
      contenido: contenido
    });
  }
}
