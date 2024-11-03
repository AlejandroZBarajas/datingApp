import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit{
  @Input() post?: Post

  titulo = ('')
  descripcion = ('')
  duracion = ('')
  costo  = ('')
  user_id = Number(localStorage.getItem("id"))

  constructor(private postsService: PostsService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    if(this.post){
      this.titulo=this.post.titulo
      this.descripcion=this.post.descripcion
      this.duracion=this.post.duracion
      this.costo=this.post.costo
    }
  }

  onSubmit( ):void{
    const newPost = new Post(
      this.titulo,
      this.descripcion,
      this.duracion,
      this.costo,
      this.user_id,
      this.post?.post_id
    )
    if(this.post){
      this.postsService.updatePost(newPost).subscribe({
        next: (response) => {
          console.log("post actualizado", response)
          this.router.navigate(['main'])
        }
      })
    } else{
      this.postsService.publishPost(newPost).subscribe({
        next: response=> {
          console.log("successfull publish: ",response)
        }
      })
      this.resetForm()
    }
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
