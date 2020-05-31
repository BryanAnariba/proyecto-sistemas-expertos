import { Component, OnInit } from '@angular/core';
import { AutentificacionUsuariosService } from '../services/autentificacion-usuarios.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public autentificacionUsuario: AutentificacionUsuariosService) { }

  ngOnInit(): void {
  }

}
