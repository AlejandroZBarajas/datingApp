import { Injectable } from '@angular/core';
import { Post } from '../posts/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'http://0.0.0.0:8000/posts/'

  constructor(private http: HttpClient) { 
    
   }

  toPost(newPost:Post):Observable<any>{
    return this.http.post(this.url, newPost)

  }


  getAllPosts(): Observable<Post[]> {
    console.log(this.http.get<Post[]>(this.url))
    return this.http.get<Post[]>(this.url);
  }

  publishPost(post: Post):Observable<Post> {
    console.log("url: ",this.url)
    console.log("se va el objeto: ",post)
    return this.http.post<Post>(this.url,post);
  }


  getPostsByUser(id: number): Observable<Post[]> {
    console.log("get by userId: ",this.http.get<Post[]>(`${this.url}user/${id}`))
    return this.http.get<Post[]>(`${this.url}user/${id}`);
  }

  deletePost(postId: number): Observable<Post> {
    return this.http.delete<Post>(`${this.url}${postId}`);
  }

  getPostById(post_id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}${post_id}`);
  }
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.url}${post.post_id}`, post);
  }
}
