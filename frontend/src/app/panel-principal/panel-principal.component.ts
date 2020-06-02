import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { AutentificacionUsuariosService } from '../services/autentificacion-usuarios.service';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {
  nombresPersona: string = '';
  idUsuarioLogueado: any = {};
  constructor(
    private usuariosService: UsuariosService ,
    public autenticacionUsuario: AutentificacionUsuariosService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('data')) {
      this.idUsuarioLogueado = JSON.parse(localStorage.getItem('data'));
      console.log(this.idUsuarioLogueado)
      this.getDataUser(this.idUsuarioLogueado.id);
    }
  }



  // Obtener el usuario
  getDataUser (idUsuarioLogueado) {
    console.log(idUsuarioLogueado);
    this.usuariosService.getDataUser(idUsuarioLogueado)
    .subscribe(
      (success: any) => {
        this.nombresPersona = success.nombresPersona;
      } ,
      (error) => {
        console.log(error);
      }
    )
  }

}
