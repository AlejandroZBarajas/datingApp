import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  rol: string = ('')
  user_id:number=0

  constructor (private postsService : PostsService, private router : Router){}

  ngOnInit():void{
    this.rol=localStorage.getItem('rol')?? ""

  }

  toEdit(){

  }

  toDelete(){
    if(this.post.post_id!== undefined){
      this.postsService.deletePost(this.post.post_id).subscribe({
        next: (response) => {
          console.log("Post eliminado: ", response);
          location.reload()
        },
        error: (err) => {
          console.error("Error al eliminar el post: ", err);
        }
      });
    }else{
      console.error("post_id undefined")
    }

   
  }
}
