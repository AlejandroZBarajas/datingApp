/* import { Component } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {

  titulo = ('')
  descripcion = ('')
  duracion = ('')
  costo  = ('')

  constructor(private postsService: PostsService){}

  onSubmit( ):void{
    const newPost = new Post(

      this.titulo,
      this.descripcion,
      this.duracion,
      this.costo
    )
    this.postsService.publishPost(newPost)
    this.resetForm()

  }
  resetForm(){

    this.titulo = ('')
    this.descripcion = ('')
    this.duracion = ('')
    this.costo  = ('')
  }

}
 */