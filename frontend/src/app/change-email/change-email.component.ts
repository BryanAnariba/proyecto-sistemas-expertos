import { Component, OnInit } from '@angular/core';
import { Validators , FormControl , FormGroup } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { AutentificacionUsuariosService } from '../services/autentificacion-usuarios.service';
@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {
  nombresPersona: string = '';
  idUsuarioLogueado: any = {};
  statusResponse: number = null;
  servidorRetorna: string = '';

  constructor(
    private usuariosService: UsuariosService ,
    public autentificacionUsuario: AutentificacionUsuariosService
  ) { }
  changeEmail = new FormGroup({
    correoPersona: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
    nuevoCorreoPersona: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
  });

  get correoPersona () {
    return this.changeEmail.get('correoPersona');
  }

  get nuevoCorreoPersona () {
    return this.changeEmail.get('nuevoCorreoPersona');
  }

  ngOnInit(): void {
    if (localStorage.getItem('data')) {
      this.idUsuarioLogueado = JSON.parse(localStorage.getItem('data'));
      console.log(this.idUsuarioLogueado)
      this.getDataUser(this.idUsuarioLogueado.id);
    }
  }
  saveChanges (){
    this.usuariosService.cambiaCorreo(this.idUsuarioLogueado.id , this.changeEmail.value)
    .subscribe(
      (success:any) => {
        if (success.codigoRes == 1) {
          this.statusResponse = 1;
          this.servidorRetorna = success.mensaje;
          this.changeEmail.reset();
        } else {
          if (success.codigoRes == 0) {
            this.statusResponse = 0;
            this.servidorRetorna = success.mensaje;
          }
        }
      } ,
      (error) => {
        console.log(error);
      }
    );
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
