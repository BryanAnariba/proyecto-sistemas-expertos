import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Cosas importadas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { ChangePhotographyComponent } from './change-photography/change-photography.component';
import { PanelInputComponent } from './panel-input/panel-input.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { InsertUsersComponent } from './insert-users/insert-users.component';
import { AssignPrivsUserComponent } from './assign-privs-user/assign-privs-user.component';
import { AssignStatusUserComponent } from './assign-status-user/assign-status-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/languages/de.js';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/image_tui.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/embedly.min';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { InsertNewBlogComponent } from './insert-new-blog/insert-new-blog.component';
import { BankOfImagesComponent } from './bank-of-images/bank-of-images.component';
import { ProtectorRutasGuard } from './guards/protector-rutas.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
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
    InsertNewBlogComponent,
    BankOfImagesComponent,
    //EditorModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//
    HttpClientModule,//
    ReactiveFormsModule,//
    FroalaEditorModule.forRoot(),//
    FroalaViewModule.forRoot()//
  ],
  providers: [
    // El guard va aqui E INTERCEPTORES
    ProtectorRutasGuard ,
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: TokenInterceptorService ,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
