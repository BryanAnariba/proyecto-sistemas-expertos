import { Component, OnInit, Output } from '@angular/core';
import { Validators , FormGroup , FormControl } from '@angular/forms';
import { AutentificacionUsuariosService } from '../services/autentificacion-usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  dataUser: any = {};
  constructor(private autenticacionServices: AutentificacionUsuariosService , private router: Router) { }
  // Agrupando Formulario
  nuevoUsuario = new FormGroup({
    nombresPersona: new FormControl('', [Validators.required , Validators.maxLength(45) , Validators.minLength(5)]),
    apellidosPersona: new FormControl('' , [Validators.required , Validators.maxLength(45) , Validators.minLength(5)]),
    generoPersona: new FormControl('' , [Validators.required]),
    fechaNacimiento: new FormControl('' , [Validators.required]),
    correoPersona: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
    passwordPersona: new FormControl('' , [Validators.required , Validators.minLength(8)])
  });

  // parte de alertas de borrado y creacio con exito o con error
  flagRes: boolean;
  contentRes: string = '';
  maquetacionUsuario: any = {};

  // Metodos para enlazar errores con los inputs
  get nombresPersona() {
    return this.nuevoUsuario.get('nombresPersona');
  }
  get apellidosPersona() {
    return this.nuevoUsuario.get('apellidosPersona');
  }
  get generoPersona() {
    return this.nuevoUsuario.get('generoPersona')
  }
  get fechaNacimiento() {
    return this.nuevoUsuario.get('fechaNacimiento');
  }
  get correoPersona() {
    return this.nuevoUsuario.get('correoPersona');
  }
  get passwordPersona() {
    return this.nuevoUsuario.get('passwordPersona');
  }
  ngOnInit(): void {
  }

  guardarUsuario () {
    this.maquetacionUsuario = this.nuevoUsuario;
    console.log(this.maquetacionUsuario.value);
    this.autenticacionServices.crearUsuario(this.maquetacionUsuario.value)
    .subscribe(
      (res:any) => {
        console.log(res);
        if(res.codigoRes == 1) {
          this.flagRes = true;
          this.contentRes = res.correoPersona;
          // Guardamos el success en localstorage
          //localStorage.setItem('informacionAcceso' , JSON.stringify(res));
          this.dataUser = {
            id: res.id
          };
          localStorage.setItem('data' , JSON.stringify(this.dataUser));
          localStorage.setItem('token' , res.tokenAcceso);
          this.router.navigate(['/panel-principal']);
        } else {
          this.flagRes = false;
          this.contentRes = res.mensaje;
        }
      } ,
      (error) => {
        if(error.codigoRes == 0) {
          console.log(error.mensaje);
        }
      });
      this.nuevoUsuario.reset();
      // Limpiamos Variables para volver a crear otro usuario
      this.contentRes = '';
      this.flagRes = false;
  }

}
