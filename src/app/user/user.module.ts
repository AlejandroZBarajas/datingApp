import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { PostsModule } from '../posts/posts.module';
import { UsercardComponent } from './components/usercard/usercard.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';






@NgModule({
  declarations: [
  RegisterFormComponent,
  LoginFormComponent,
  UsercardComponent,
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
    UsercardComponent

  ]
})
export class UserModule { }
