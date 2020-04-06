import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators, FormControl , FormGroup } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-assign-privs-user',
  templateUrl: './assign-privs-user.component.html',
  styleUrls: ['./assign-privs-user.component.css']
})
export class AssignPrivsUserComponent implements OnInit {
  usersInvited:any = [];
  urlBackend: string = 'http://localhost:3500';
  idUser: number = null;
  id: number = null;
  status: number = null;
  invitacion: boolean = null;

  // parte de alertas de borrado y creacio con exito o con error
  flagRes: boolean;
  contentRes: string = '';

  constructor(private httpClient : HttpClient) { }
  changePrivs = new FormGroup({
    emailUser: new FormControl('' , [ Validators.required ]),
    optionUser: new FormControl('' , [ Validators.required ]),
    statusInvited: new FormControl('')
  });
  get emailUser () {
    return this.changePrivs.get('emailUser');
  }
  get optionUser () {
    return this.changePrivs.get('optionUser');
  }
  get statusInvited () {
    return this.changePrivs.get('statusInvited');
  }
  ngOnInit(): void {
    this.getUsersInvited ();
  }

  getUsersInvited () {
    this.httpClient.get(`${this.urlBackend}/invite-user`)
      .subscribe((res:any) => {
        this.usersInvited = res;
        console.log(this.usersInvited);
      });
  }

  getUserSelected ( idUser ) {
    this.idUser = idUser;
    this.httpClient.get(`${this.urlBackend}/invite-user/${this.idUser}`)
      .subscribe((res:any) => {
        console.log(res);
        this.id = res.emailUser;
        this.status = res.optionUser;
        this.invitacion = res.statusInvited;
      });
  }

  updateUserData () {
    this.httpClient.put(`${this.urlBackend}/invite-user/${this.idUser}` , this.changePrivs.value)
      .subscribe((res:any) => {
        console.log(res);
        this.getUsersInvited ();
        if(res.statusRes == 1) {
          this.flagRes = true;
          this.contentRes = res.message;
        } else {
          this.flagRes = false;
          this.contentRes = res.message;
        }
      });
      this.flagRes = null;
      this.contentRes = null;

  }

}
