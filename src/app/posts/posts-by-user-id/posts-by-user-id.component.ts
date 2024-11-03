import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'posts-by-user-id',
  templateUrl: './posts-by-user-id.component.html',
  styleUrl: './posts-by-user-id.component.css'
})
export class PostsByUserIdComponent implements OnInit{
  user_id=Number(localStorage.getItem('id'))
  posts: Post [] = []

  constructor(private postsService: PostsService){}

  ngOnInit(){
    this.fetchById()
  }

  fetchById(){
    console.log("intenta la busqueda")
    this.postsService.getPostsByUser(this.user_id).subscribe({
      next:(data)=>{
        this.posts=data
      },
      error:(err) => {
        console.error("error: ",err)
      }
    })
  }
}
