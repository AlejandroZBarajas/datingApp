import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule } from '@angular/forms';
import { PostsByUserIdComponent } from './posts-by-user-id/posts-by-user-id.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';



@NgModule({
  declarations: [
    PostCardComponent,
    PostFormComponent,
    PostsByUserIdComponent,
    AllPostsComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PostCardComponent,
    PostFormComponent,
    PostsByUserIdComponent,
    AllPostsComponent
  ]
})
export class PostsModule { }
