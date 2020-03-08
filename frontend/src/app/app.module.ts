import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginPasswordComponent } from './login-password/login-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePhotographyComponent } from './change-photography/change-photography.component';
import { PanelInputComponent } from './panel-input/panel-input.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { InsertUsersComponent } from './insert-users/insert-users.component';
import { AssignPrivsUserComponent } from './assign-privs-user/assign-privs-user.component';
import { AssignStatusUserComponent } from './assign-status-user/assign-status-user.component';

//import { EditorModule } from '@tinymce/tinymce-angular'; //


@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    LoginPasswordComponent,
    SignUpComponent,
    LandingPageComponent,
    FooterComponent,
    PanelPrincipalComponent,
    BadRequestComponent,
    SettingsUserComponent,
    ChangeEmailComponent,
    ChangePasswordComponent,
    ChangePhotographyComponent,
    PanelInputComponent,
    AdminUserComponent,
    InsertUsersComponent,
    AssignPrivsUserComponent,
    AssignStatusUserComponent,
    //EditorModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
