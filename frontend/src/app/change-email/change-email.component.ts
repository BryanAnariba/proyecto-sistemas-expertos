import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators , FormControl , FormGroup } from '@angular/forms';
@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  urlBackend:string = 'http://localhost:3500';
  changeEmail = new FormGroup({
    email: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
    repeatEmail: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
    newEmail: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
    repeatNewEmail: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
  });

  get email () {
    return this.changeEmail.get('email');
  }

  get repeatEmail () {
    return this.changeEmail.get('repeatEmail');
  }

  get newEmail () {
    return this.changeEmail.get('newEmail');
  }

  get repeatNewEmail () {
    return this.changeEmail.get('repeatNewEmail');
  }
  ngOnInit(): void {
  }
  saveChanges (){
    this.httpClient.post(`${this.urlBackend}/change-email` , this.changeEmail.value)//cambiar a put cuando se guarde en sesion un id de usuario
      .subscribe((res:any) =>{
        console.log(res.statusRes + ' -> ' + res.message);
      });
      this.changeEmail.reset();
  }
}
