import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFormComponent } from './post-form/post-form.component';



@NgModule({
  declarations: [
    PostCardComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
