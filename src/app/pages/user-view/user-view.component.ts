import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../posts/post-card/post-card.component';
import { PostFormComponent } from '../../posts/post-form/post-form.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../posts/post';


@Component({
  selector: 'user-view',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent implements OnInit{
   posts: Post []=[]
   role:string=('') 
   user_id:number=0

  constructor(private router: Router, private auth: AuthService, private postsService: PostsService){
  }
  
  ngOnInit(){
    this.role=localStorage.getItem('rol') ?? ""
    if(localStorage.getItem('rol')==='Accompanied'){
      this.loadPosts()
    }
  }

  loadPosts(){
    this.postsService.getAllPosts().subscribe({
      next:(data:Post[])=>{
        this.posts=data
        console.log("posts: ",this.posts)
      },
      error:(error)=> {
        console.log("error: ",error)
      }
    })
  }
}
