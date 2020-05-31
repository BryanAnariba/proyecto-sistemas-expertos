import { Component, OnInit } from '@angular/core';
import { Validators , FormControl , FormGroup } from '@angular/forms';
import { AutentificacionUsuariosService } from '../services/autentificacion-usuarios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private autenticationService: AutentificacionUsuariosService , private router: Router ) { }
  disparadorMensajeServer: boolean = false;
  mensajeDesdeServer: string = '';

  // Agrupando Formulario
  userCredentials = new FormGroup({
    correoPersona: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
    passwordPersona: new FormControl('' , [Validators.required])
  });

  // Metodos para enlazar errores con los inputs
  get correoPersona () {
    return this.userCredentials.get('correoPersona');
  }
  get passwordPersona() {
    return this.userCredentials.get('passwordPersona');
  }

  ngOnInit(): void {
  }

  // 2 - Logueo de usuario para lo cual se necesitan las credenciales
  logueoUsuario () {
    this.autenticationService.logueoUsuario(this.userCredentials.value)
    .subscribe(
      (success: any) => {

        // Si no encontro el correo electronico
        if (success.codigoRes == 2) {
          this.disparadorMensajeServer = true;
          this.mensajeDesdeServer = success.mensaje;
        }

        // Si las credenciales son correctas
        if(success.codigoRes == 1) {
          console.log({ mensaje: 'Credenciales Correctas' });
          console.log(success);

          // Guardamos el success en localstorage
          //localStorage.setItem('informacionAcceso' , JSON.stringify(success));
          localStorage.setItem('token' , success.tokenAcceso);
          console.log('tu token ' , localStorage.getItem('token'));
          this.router.navigate(['/panel-principal']);
        }

        // Si la clave ingresada es incorrecta
        if (success.codigoRes == 0) {
          this.disparadorMensajeServer = true;
          this.mensajeDesdeServer = success.mensaje;
        }
      } ,
      (error) => {
        console.log(error);
      }
    );
    this.disparadorMensajeServer = false;
  }

}
