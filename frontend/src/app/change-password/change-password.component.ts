import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl , Validators , FormGroup} from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  urlBackend: string = 'http://localhost:3500';
  changePassword = new FormGroup({
    password: new FormControl('' , [Validators.required]),
    repeatPassword: new FormControl('' , [Validators.required]),
    newPassword: new FormControl('' , [Validators.required]),
    repeatNewPassword: new FormControl('' , [Validators.required])
  });

  get password () {
    return this.changePassword.get('password');
  }
  get repeatPassword () {
    return this.changePassword.get('repeatPassword');
  }
  get newPassword () {
    return this.changePassword.get('newPassword');
  }
  get repeatNewPassword () {
    return this.changePassword.get('repeatNewPassword');
  }

  ngOnInit(): void {
  }

  changePass () {
    this.httpClient.post(`${this.urlBackend}/change-password` , this.changePassword.value)//cambiar a put cuando se guarde en sesion un id de usuario
      .subscribe((res:any) => {
        console.log(res.statusRes + ' -> ' + res.message);
      });
    this.changePassword.reset();
  }

}
