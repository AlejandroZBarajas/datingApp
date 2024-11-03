import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'all-posts',
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
export class AllPostsComponent implements OnInit {
  posts: Post [] = []

  constructor(private service: PostsService){}

  ngOnInit(): void {
      this.getAll()
  }
  getAll(){
    this.service.getAllPosts().subscribe({
      next:(data) => {
        this.posts= data
      },
      error:(err) => {
        console.error("error: ",err)
      }
    })
  }
}
