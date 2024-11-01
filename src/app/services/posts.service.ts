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
      titulo:"cogidita",
      descripcion:"te voy a dar una cogidita chida",
      duracion:"una hora o lo que tardes",
      costo:"200"
    },{
      postedBy:2,
      titulo:"masage",
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
