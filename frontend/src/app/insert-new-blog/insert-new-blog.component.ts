import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators , FormControl , FormGroup } from '@angular/forms';
@Component({
  selector: 'app-insert-new-blog',
  templateUrl: './insert-new-blog.component.html',
  styleUrls: ['./insert-new-blog.component.css']
})
export class InsertNewBlogComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  urlBackend: string = 'http://localhost:3500';
  allBlogs: any = [];
  newBlog = new FormGroup({
    siteId: new FormControl(''  , [Validators.required]),
    blogName: new FormControl(''  , [Validators.required , Validators.maxLength(50) , Validators.minLength(1)]),
    content: new FormControl('')
  });

  // parte de alertas de borrado y creacio con exito o con error
  flagRes: boolean;
  contentRes: string = '';
  get siteId () {
    return this.newBlog.get('siteId');
  }

  get blogName () {
    return this.newBlog.get('blogName');
  }

  ngOnInit(): void {
    this.viewBlogs ()
  }

  // Guardar nueva entrada o blog
  saveBlog () {
    this.httpClient.post(`${this.urlBackend}/blogs` , this.newBlog.value)
      .subscribe((res:any) => {
        console.log(res.statusRes + ' -> ' + res.message);
        if(res.statusRes == 1) {
          this.flagRes = true;
          this.contentRes = res.message;
        } else {
          this.flagRes = false;
          this.contentRes = res.message;
        }
        this.viewBlogs ();
        this.newBlog.reset();
      });
      this.contentRes = '';
      this.flagRes = false;
  }

  // Carga todos los blogs al inicio y cuando insertas un nuevo blog
  viewBlogs () {
    this.httpClient.get(`${this.urlBackend}/blogs`)
      .subscribe((res:any) => {
        this.allBlogs = res;
        console.log(this.allBlogs);
      });
  }

  // Elimina un blog
  deleteBlog ( blogId) {
    this.httpClient.delete(`${this.urlBackend}/blogs/${blogId}`)
      .subscribe(
        (res:any) => {
          console.log(res.statusRes + ' -> ' + res.message);
          if(res.statusRes == 1) {
            this.flagRes = true;
            this.contentRes = res.message;
          } else {
            this.flagRes = false;
            this.contentRes = res.message;
          }
          this.viewBlogs();
        });
      this.contentRes = '';
      this.flagRes = false;
  }


}
