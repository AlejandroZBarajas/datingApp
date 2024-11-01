import { Injectable } from '@angular/core';
import { Post } from '../posts/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = []



  constructor() { 
    this.posts=[{
      postedBy:1,
      titulo:"tu sabes que es ",
      descripcion:"te voy a dar una pasadita chida",
      duracion:"una hora o lo que tardes",
      costo:"800"
    },{
      postedBy:2,
      titulo:"massage",
      descripcion:"va a estar chido y vas a acabar relajado",
      duracion:"una hora",
      costo:"400"
    }
  ]
   }

  getAllPosts():Post[]{
    return this.posts
  }

  publishPost(newPost: Post): void{
    this.posts.push(newPost)
  }

  getPostsByUser(id:number): Post[]{
    const postedBy = this.posts.filter(post=> post.postedBy === id)
    return postedBy
  }
}
