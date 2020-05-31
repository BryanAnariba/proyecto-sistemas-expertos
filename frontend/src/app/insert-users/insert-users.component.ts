import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators , FormControl , FormGroup } from '@angular/forms';
import { AutentificacionUsuariosService } from '../services/autentificacion-usuarios.service';


@Component({
  selector: 'app-insert-users',
  templateUrl: './insert-users.component.html',
  styleUrls: ['./insert-users.component.css']
})
export class InsertUsersComponent implements OnInit {
  constructor(
    private httpClient: HttpClient ,
    private autenticacionService: AutentificacionUsuariosService) { }
  usersInvited:any = [];
  urlBackend: string = 'http://localhost:3500';
  insertEmail = new FormGroup({
    emailUser: new FormControl('' , [Validators.required , Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]),
    optionUser: new FormControl('' , [Validators.required])
  });

  // parte de alertas de borrado y creacio con exito o con error
  flagRes: boolean;
  contentRes: string = '';

  ngOnInit(): void {
    this.getUsersInvited();
  }
  get emailUser() {
    return this.insertEmail.get('emailUser');
  }
  get optionUser () {
    return this.insertEmail.get('optionUser')
  }
  getUsersInvited () {
    this.httpClient.get(`${this.urlBackend}/invite-user`)
      .subscribe((res:any) => {
        this.usersInvited = res;
        console.log(this.usersInvited);
      });
  }
  saveEmail () {
    this.httpClient.post(`${this.urlBackend}/invite-user` , this.insertEmail.value)
      .subscribe((res:any) => {
        console.log(res.statusRes + ' -> ' + res.message + res.emailUser);
        if(res.statusRes == 1) {
          this.flagRes = true;
          this.contentRes = res.message;
        } else {
          this.flagRes = false;
          this.contentRes = res.message;
        }
        this.getUsersInvited();
      });
      this.insertEmail.reset();
  }




}
