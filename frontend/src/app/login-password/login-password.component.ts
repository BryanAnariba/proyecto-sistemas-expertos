import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators , FormControl , FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login-password',
  templateUrl: './login-password.component.html',
  styleUrls: ['./login-password.component.css']
})
export class LoginPasswordComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  urlBackend:string = 'http://localhost:3500';
  ngOnInit(): void {
  }
  keyCredential = new FormGroup({
    userKey: new FormControl('', [Validators.required])
  });

  get userKey() {
    return this.keyCredential.get('userKey');
  }
  verifyKey () {
    this.httpClient.post(`${ this.urlBackend }/login-password` , this.keyCredential.value)
      .subscribe((res:any) => {
        console.log(res.statusRes + ' -> ' + res.message + ' -> ' + res.key);
      });
  }

}
