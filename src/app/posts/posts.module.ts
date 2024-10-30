import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PostCardComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PostCardComponent,
    PostFormComponent
  ]
})
export class PostsModule { }
