import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginUserComponent } from './login-user/login-user.component'; //
import { LoginPasswordComponent } from './login-password/login-password.component'; //
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component'; //
import { SignUpComponent } from './sign-up/sign-up.component'; //
import { BadRequestComponent } from './bad-request/bad-request.component'; //

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
    path: 'login-password' ,
    component: LoginPasswordComponent
  } ,
  {
    path: 'panel-principal',
    component: PanelPrincipalComponent
  } ,
  {
    path: 'sign-up' ,
    component: SignUpComponent
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
