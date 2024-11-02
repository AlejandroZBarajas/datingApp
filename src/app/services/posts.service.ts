import { Injectable } from '@angular/core';
import { Post } from '../posts/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private api = 'http://0.0.0.0:8000/'

  constructor(private http: HttpClient) { 
    
   }

  toPost(newPost:Post):Observable<any>{
    return this.http.post(`${this.api}posts/`, newPost)

  }


  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}posts/`);
  }

  publishPost(newPost: Post): void {
    this.toPost(newPost).subscribe({
      next: (response) => console.log('Post publicado:', response),
      error: (error) => console.error('Error al publicar post:', error),
    });
  }


  getPostsByUser(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api}users/${id}/posts`);
  }
}
