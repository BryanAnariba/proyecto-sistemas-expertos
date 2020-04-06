import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators , FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  urlBackend:string = 'http://localhost:3500';

  // Agrupando Formulario
  nuevoUsuario = new FormGroup({
    firstName: new FormControl('', [Validators.required , Validators.maxLength(45) , Validators.minLength(5)]),
    lastName: new FormControl('' , [Validators.required , Validators.maxLength(45) , Validators.minLength(5)]),
    genderSameName: new FormControl('' , [Validators.required]),
    date: new FormControl('' , [Validators.required]),
    emailUser: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
    passwordUser: new FormControl('' , [Validators.required , Validators.minLength(8)])
  });

  // parte de alertas de borrado y creacio con exito o con error
  flagRes: boolean;
  contentRes: string = '';

  // Metodos para enlazar errores con los inputs
  get firstName() {
    return this.nuevoUsuario.get('firstName');
  }
  get lastName() {
    return this.nuevoUsuario.get('lastName');
  }
  get genderSameName() {
    return this.nuevoUsuario.get('genderSameName')
  }
  get date() {
    return this.nuevoUsuario.get('date');
  }
  get emailUser() {
    return this.nuevoUsuario.get('emailUser');
  }
  get passwordUser() {
    return this.nuevoUsuario.get('passwordUser');
  }
  ngOnInit(): void {
  }

  crearCuenta () {
    this.httpClient.post(`${this.urlBackend}/signup` , this.nuevoUsuario.value)
      .subscribe((res:any) => {
        console.log(res.statusRes);
        console.log(res.message);
        console.log(res.usuarioCreado);
        if(res.statusRes == 1) {
          this.flagRes = true;
          this.contentRes = res.message;
        } else {
          this.flagRes = false;
          this.contentRes = res.message;
        }
      });
      this.nuevoUsuario.reset();
      // Limpiamos Variables para volver a crear otro usuario
      this.contentRes = '';
      this.flagRes = false;
  }

}
