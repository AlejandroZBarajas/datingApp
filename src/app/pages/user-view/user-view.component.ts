import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../posts/post-card/post-card.component';
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
   userId:number=0

  constructor(private router: Router, private auth: AuthService, private postsService: PostsService){
  }
  
  ngOnInit(){
    console.log("rol: ",this.auth.getUserRol())
    //this.userId = this.auth.getUserId() ?? 0
    this.role=this.auth.getUserRol() ?? ''
      if(this.auth.getUserRol()==='Accompanied'){
        this.posts=this.postsService.getAllPosts()
    }
}


  onLogoClick():void{  //ya funciona
    this.router.navigate(['main']);
  }
  
  cerrarSesion():void{  //ya funciona
    this.auth.logout()
    this.router.navigate(['home'])
  }

}
