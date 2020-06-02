import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators , FormControl , FormGroup, Form } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-panel-input',
  templateUrl: './panel-input.component.html',
  styleUrls: ['./panel-input.component.css']
})
export class PanelInputComponent implements OnInit {
  constructor(
    private httpClient: HttpClient ,
    private usuariosService: UsuariosService ,
  ) { }

  // Variables
  idUsuarioLogueado: any = {};
  nombresPersona: string = '';
  urlBackend: string = 'http://localhost:3500';
  allBlogs: any = [];
  blogIdTable:number = null;
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

  // parte de alertas de borrado y creacio con exito o con error
  flagRes: boolean;
  contentRes: string = '';

  dataFroala : Object  = {
    placeholderText: '¡ Edite su contenido aquí! ' ,
    charCounterCount: false
  }
  editorContent : string  =  '';



  // Metodos
  viewBlogs () {
    this.httpClient.get(`${this.urlBackend}/blogs`)
      .subscribe((res:any) => {
        this.allBlogs = res;
        console.log(this.allBlogs);
      });
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
    this.httpClient.get(`${this.urlBackend}/blogs/${this.blogIdTable}`)
      .subscribe((res:any) => {
        console.log(res);
        this.editorContent = res.content;
        this.blogDetaills = res;

        // igualando a componentes para mostrarlo en el html debido a cruce o binding ngModel
        this.editorContent = res.content;
        this.blogDetaills = res
      });
  }

  guardar() {
    this.nuevoContenido = {
      siteId: this.blogDetaills.siteId ,
      blogName: this.blogDetaills.blogName,
      content: this.editorContent
    };
    console.log(this.nuevoContenido);
    this.httpClient.put(`${this.urlBackend}/blogs/${this.blogIdTable}`, this.nuevoContenido)
      .subscribe((res:any) => {
        console.log(res.statusRes + ' -> ' + res.message);
        if(res.statusRes == 1) {
          this.flagRes = true;
          this.contentRes = res.message;
        } else {
          this.flagRes = false;
          this.contentRes = res.message;
        }
      });
      this.contentRes = '';
      this.flagRes = false;
  }



  // Obtener el usuario
  getDataUser (idUsuarioLogueado) {
    console.log(idUsuarioLogueado);
    this.usuariosService.getDataUser(idUsuarioLogueado)
    .subscribe(
      (success: any) => {
        console.log(success);
        this.nombresPersona = success.nombresPersona;
      }
    )
  }
}
