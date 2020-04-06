import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators , FormControl , FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  urlBackend: string = 'http://localhost:3500';

  // Agrupando Formulario
  emailCredential = new FormGroup({
    emailUser: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
    cosa: new FormControl('')
  });

  // Metodos para enlazar errores con los inputs
  get emailUser () {
    return this.emailCredential.get('emailUser');
  }
  get cosa() {
    return this.emailCredential.get('cosa');
  }

  ngOnInit(): void {
  }

  verifyEmail () {
    this.httpClient.post(`${this.urlBackend}/login-email` , this.emailCredential.value)
      .subscribe((res:any) => {
        console.log(res.statusRes);
        console.log(res.user);
      });
  }

}
