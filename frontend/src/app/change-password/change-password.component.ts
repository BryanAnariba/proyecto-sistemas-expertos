import { Component, OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup} from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { AutentificacionUsuariosService } from '../services/autentificacion-usuarios.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  nombresPersona: string = '';
  idUsuarioLogueado: any = {};
  statusResponse: number = null;
  servidorRetorna: string = '';
  pass: string ='';
  newPass: string = '';

  constructor(
    private usuariosService: UsuariosService ,
    public autentificacionUsuario: AutentificacionUsuariosService
  ) { }
  changePassword = new FormGroup({
    PasswordPersona: new FormControl('' , [Validators.required , Validators.minLength(8)]) ,
    repitaNuevoPasswordPersona: new FormControl('', [Validators.required , Validators.minLength(8)])
  });

  get PasswordPersona () {
    return this.changePassword.get('PasswordPersona');
  }

  get repitaNuevoPasswordPersona () {
    return this.changePassword.get('repitaNuevoPasswordPersona');
  }


  ngOnInit(): void {
    if (localStorage.getItem('data')) {
      this.idUsuarioLogueado = JSON.parse(localStorage.getItem('data'));
      console.log(this.idUsuarioLogueado)
      this.getDataUser(this.idUsuarioLogueado.id);
    }
  }

  changePass () {
    if (this.pass != this.newPass) {
      this.statusResponse = 2;
      this.servidorRetorna = 'Las claves no coinciden';
      this.changePassword.reset();
    } else {
      this.statusResponse = 1;
      this.usuariosService.cambiaClave(this.idUsuarioLogueado.id , this.changePassword.value)
      .subscribe(
        (success: any) => {
          if (success.codigoRes == 1) {
            this.servidorRetorna = success.mensaje;
          } else {
            this.servidorRetorna = success.mensaje;
          }
        } ,
        (error) => {
          console.log(error);
        }
      )
    }
  }

  // Obtener el usuario
  getDataUser (idUsuarioLogueado) {
    console.log(idUsuarioLogueado);
    this.usuariosService.getDataUser(idUsuarioLogueado)
    .subscribe(
      (success: any) => {
        this.nombresPersona = success.nombresPersona;
        this.changePassword.reset();
      } ,
      (error) => {
        console.log(error);
      }
    )
  }
}
