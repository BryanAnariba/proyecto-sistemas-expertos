import { Component, OnInit } from '@angular/core';
import { AutentificacionUsuariosService } from '../services/autentificacion-usuarios.service';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {
  nombreUsuario: string = '';
  constructor(public autenticacionUsuario: AutentificacionUsuariosService) { }

  ngOnInit(): void {
  }

}
