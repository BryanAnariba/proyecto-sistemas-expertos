import { Component, OnInit } from '@angular/core';
import { Validators , FormControl , FormGroup } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { PlataformasWebService } from '../services/plataformas-web.service';
@Component({
  selector: 'app-insert-new-blog',
  templateUrl: './insert-new-blog.component.html',
  styleUrls: ['./insert-new-blog.component.css']
})
export class InsertNewBlogComponent implements OnInit {
  constructor(
    private usuariosService: UsuariosService ,
    private plataformasService: PlataformasWebService
  ) {  }

  // Variables
  idUsuarioLogueado: any = {};
  nombresPersona: string = '';
  dataPlataforma: any = {};
  creadorSitios: string = '';
  id: string = '';

  urlBackend: string = 'http://localhost:3500';
  allBlogs: any = [];
  newBlog = new FormGroup({
    nombreSitioWeb : new FormControl(''  , [Validators.required , Validators.maxLength(50) , Validators.minLength(5)]),
    descripcion : new FormControl(''  , [Validators.required , Validators.maxLength(50)]),
    contenido : new FormControl('En que estas pensando amiguito.')
  });

  // parte de alertas de borrado y creacio con exito o con error
  flagRes: boolean;
  contentRes: string = '';
  get nombreSitioWeb () {
    return this.newBlog.get('nombreSitioWeb');
  }

  get descripcion () {
    return this.newBlog.get('descripcion');
  }

  ngOnInit(): void {

    if (localStorage.getItem('data')) {
      this.idUsuarioLogueado = JSON.parse(localStorage.getItem('data'));
      console.log(this.idUsuarioLogueado)
      this.getDataUser(this.idUsuarioLogueado.id);
    }
    this.viewBlogs();
  }

  // Guardar nueva entrada o blog
  saveBlog () {
    this.plataformasService.crearPlataforma(this.idUsuarioLogueado.id , this.nombresPersona , this.newBlog.value)
    .subscribe(
      (success: any) => {
        console.log(success);
        this.viewBlogs();
        this.newBlog.reset();
        this.flagRes = true;
        this.contentRes = 'Plataforma creada con exito';
      } ,
      (error) => {
        console.log(error)
      }
    );
    this.flagRes = false;
  }

  addBlog () {
    this.plataformasService.agregarNuevoSitio(this.idUsuarioLogueado.id , this.newBlog.value)
    .subscribe(
      (success:any) => {
        console.log(success);
        this.viewBlogs();
        this.newBlog.reset();
        this.flagRes = true;
        this.contentRes = 'Plataforma creada con exito';
      } ,
      (error) => {
        console.log(error);
      }
    )
    this.flagRes = false;
  }
  // Carga todos los blogs al inicio y cuando insertas un nuevo blog
  viewBlogs () {
    this.plataformasService.obtenerPlataformas(this.idUsuarioLogueado.id)
    .subscribe(
      (success: any) => {
        console.log(success);
        this.allBlogs = success.plataformasCreadas;
        this.id = success.idCreadorSitioWeb;
        this.creadorSitios = success.nombreCreadorSitioWeb;
      } ,
      (error) => {
        console.log(error);
      }
    )
  }

  // Elimina un blog
  deleteBlog (id) {
    console.log(id);
  }

  // Obtener el usuario
  getDataUser (idUsuarioLogueado) {
    console.log(idUsuarioLogueado);
    this.usuariosService.getDataUser(idUsuarioLogueado)
    .subscribe(
      (success: any) => {
        this.nombresPersona = success.nombresPersona;
      } ,
      (error) => {
        console.log(error);
      }
    )
  }
}
