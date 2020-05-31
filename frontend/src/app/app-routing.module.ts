import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// MODULOS IMPORTADOS
import { LandingPageComponent } from './landing-page/landing-page.component';//
import { LoginUserComponent } from './login-user/login-user.component'; //
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component'; //
import { SignUpComponent } from './sign-up/sign-up.component'; //
import { BadRequestComponent } from './bad-request/bad-request.component'; //
import { SettingsUserComponent } from './settings-user/settings-user.component'; //
import { ChangeEmailComponent } from './change-email/change-email.component'; //
import { ChangePasswordComponent } from './change-password/change-password.component'; //
import { ChangePhotographyComponent } from './change-photography/change-photography.component'; //
import { PanelInputComponent } from './panel-input/panel-input.component'; //
import { AdminUserComponent } from './admin-user/admin-user.component'; //
import { InsertUsersComponent } from './insert-users/insert-users.component';//
import { InsertNewBlogComponent } from './insert-new-blog/insert-new-blog.component';//
import { AssignPrivsUserComponent } from './assign-privs-user/assign-privs-user.component';//
import { AssignStatusUserComponent } from './assign-status-user/assign-status-user.component'//
import { ProtectorRutasGuard } from './guards/protector-rutas.guard';

// aplicando rutas para poder dirigirme a x componente al apretar un link de navegacion para ello ocupo importar componentes
const routes: Routes = [
  {
    path: '' ,
    component: LandingPageComponent
  } ,
  {
    path:'login-user',
    component: LoginUserComponent
  } ,
  {
    path: 'panel-principal',
    component: PanelPrincipalComponent ,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: 'settings-user' ,
    component: SettingsUserComponent,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: 'sign-up' ,
    component: SignUpComponent
  } ,
  {
    path: 'change-email' ,
    component: ChangeEmailComponent,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: 'change-password' ,
    component: ChangePasswordComponent,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: 'change-photography' ,
    component: ChangePhotographyComponent,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: 'panel-input' ,
    component: PanelInputComponent,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: 'blogs' ,
    component: InsertNewBlogComponent,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: 'admin',
    component: AdminUserComponent,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: 'invite-users'  ,
    component: InsertUsersComponent,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: 'asign-privs' ,
    component: AssignPrivsUserComponent,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: 'asign-status' ,
    component: AssignStatusUserComponent,
    canActivate: [ProtectorRutasGuard]
  } ,
  {
    path: '**' ,
    component: BadRequestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
