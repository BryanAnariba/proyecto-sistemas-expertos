import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators , FormControl , FormGroup, Form } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { PlataformasWebService } from '../services/plataformas-web.service';


@Component({
  selector: 'app-panel-input',
  templateUrl: './panel-input.component.html',
  styleUrls: ['./panel-input.component.css']
})
export class PanelInputComponent implements OnInit {
  constructor(
    private httpClient: HttpClient ,
    private usuariosService: UsuariosService ,
    private plataformasService: PlataformasWebService
  ) { }

  // Variables
  idUsuarioLogueado: any = {};
  nombresPersona: string = '';
  urlBackend: string = 'http://localhost:3500';
  allBlogs: any = [];
  blogIdTable:number = null;
  contenido: string = '';
  muestraContenido: any = {};
  nuevoContenido: any = {
    siteId: '' ,
    blogName: '',
    content: ''
  };
  blogDetaills:any = {
    siteId: '',
    blogName: '',
    content: ''
  };
  aguardar:string='';
  // parte de alertas de borrado y creacio con exito o con error
  flagRes: boolean;
  contentRes: string = '';

  dataFroala : Object  = {
    placeholderText: '¡ Edite su contenido aquí! ' ,
    charCounterCount: false
  }
  editorContent : string  =  '';
  conten: string = '';

  // Metodos
  viewBlogs () {
    this.plataformasService.obtenerPlataformas(this.idUsuarioLogueado.id)
    .subscribe(
      (success: any) => {
        console.log(success);
        this.allBlogs = success.plataformasCreadas;
      } ,
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    if (localStorage.getItem('data')) {
      this.idUsuarioLogueado = JSON.parse(localStorage.getItem('data'));
      console.log(this.idUsuarioLogueado)
      this.getDataUser(this.idUsuarioLogueado.id);
    }

    this.viewBlogs ();
  }

  // para ir al blog y cargar el json del contenido el blog en froala
  goTheBlog ( blogId ) {
    this.blogIdTable = blogId;
    this.plataformasService.devuelveContenido(this.idUsuarioLogueado.id , blogId)
      .subscribe((res:any) => {
        console.log(res);
        this.muestraContenido = res;
        ///this.editorContent = res.creadorSitioWeb;
        //this.blogDetaills = res;

        // igualando a componentes para mostrarlo en el html debido a cruce o binding ngModel
        this.editorContent = res.content;
        this.blogDetaills = res
      });
  }

  guardar() {
    console.log(this.editorContent);
    this.plataformasService.guardarCambioc(this.idUsuarioLogueado.id , this.blogIdTable , this.editorContent)
    .subscribe(
      (success: any) =>{
        console.log(success);
        this.flagRes = true;
        this.contentRes = 'Cambios realizados exito';
      } ,
      (error) => {
        console.log(error);
      }
    )
    this.flagRes = false;
  }



  // Obtener el usuario
  getDataUser (idUsuarioLogueado) {
    console.log(idUsuarioLogueado);
    this.usuariosService.getDataUser(idUsuarioLogueado)
    .subscribe(
      (success: any) => {
        this.nombresPersona = success.nombresPersona;
      }
    )
  }
}
