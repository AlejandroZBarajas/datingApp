import { Component } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

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
  user_id = Number(localStorage.getItem("id"))

  constructor(private postsService: PostsService, private router: Router){}

  onSubmit( ):void{
    const newPost = new Post(
      this.titulo,
      this.descripcion,
      this.duracion,
      this.costo,
      this.user_id
    )
    this.postsService.publishPost(newPost).subscribe({
      next: response=> {
        console.log("successfull publish: ",response)
      }
    })
    this.resetForm()

  }
  resetForm(){
    this.titulo = ('')
    this.descripcion = ('')
    this.duracion = ('')
    this.costo  = ('')
    this.router.navigate(['main'])
  }

  return(){
    this.router.navigate(['main'])
  }

}
