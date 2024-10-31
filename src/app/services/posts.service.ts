import { Injectable } from '@angular/core';
import { Post } from '../posts/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = []

  constructor() {  }

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
