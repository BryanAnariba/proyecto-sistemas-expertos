import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.css']
})
export class SettingsUserComponent implements OnInit {
  idUsuarioLogueado: any = {};
  nombresPersona: string = '';
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    if (localStorage.getItem('data')) {
      this.idUsuarioLogueado = JSON.parse(localStorage.getItem('data'));
      console.log(this.idUsuarioLogueado)
      this.getDataUser(this.idUsuarioLogueado.id);
    }
  }


  // Obtener el usuarrio
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
