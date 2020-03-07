import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginPasswordComponent } from './login-password/login-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PanelCmsComponent } from './panel-cms/panel-cms.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    LoginPasswordComponent,
    SignUpComponent,
    PanelCmsComponent,
    LandingPageComponent,
    FooterComponent,
    PanelPrincipalComponent,
    BadRequestComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
