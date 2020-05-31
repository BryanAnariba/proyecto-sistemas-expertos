import { Component } from '@angular/core';
import { AutentificacionUsuariosService } from './services/autentificacion-usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private autentifica: AutentificacionUsuariosService){}

  getStatus () {
    return this.autentifica.verificandoLogueoUsuario();
  }
}
