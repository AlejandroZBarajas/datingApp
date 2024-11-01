import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from '../posts/post-form/post-form.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
  RegisterFormComponent,
  LoginFormComponent,
  CardComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterFormComponent,
    LoginFormComponent
  ]
})
export class UserModule { }
