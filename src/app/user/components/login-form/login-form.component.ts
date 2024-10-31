import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{
  loginForm: FormGroup;


  constructor(private userService: UsersService){
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
      
  }
  login(){

  }

   /*  onLogin() {
    const userRole = this.getUserRole(); // Método para obtener el rol del usuario
    if (userRole === 'companion') {
      this.router.navigate(['/companion']);
    } else if (userRole === 'accompanied') {
      this.router.navigate(['/accompanied']);
    }
  }
   */

}
