import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { PostsModule } from '../posts/posts.module';
import { UsercardComponent } from './components/usercard/usercard.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { PostsByUserIdComponent } from '../posts/posts-by-user-id/posts-by-user-id.component';

@NgModule({
  declarations: [
  RegisterFormComponent,
  LoginFormComponent,
  UsercardComponent,
  UpdateUserComponent,
  EditUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostsModule,
    SharedmoduleModule
 
  ],
  exports: [
    RegisterFormComponent,
    LoginFormComponent,
    UsercardComponent,
    PostsByUserIdComponent
  ]
})
export class UserModule { }
