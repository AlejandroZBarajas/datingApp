import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {
  posts: Post[]=[]

  constructor (private postsService: PostsService){}

  ngOnInit():void{
    const posts = this.postsService.getAllPosts()
  }
}
