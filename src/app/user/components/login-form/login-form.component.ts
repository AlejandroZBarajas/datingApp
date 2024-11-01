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


  constructor(private userService: UsersService, private router: Router){
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      passwrd: new FormControl('')
    })
  }

  ngOnInit(): void {
      
  }
  login(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      const{username,passwrd} = this.loginForm.value
      this.userService.login(username,passwrd).subscribe({
        next: (response) => {
          console.log("usuario loggeado: ",response)
          //  localStorage.setItem("role")
          this.router.navigate(['main'])
        },
        error:(error) => {
          console.log("error: ",error)
        }
       })
    }

  }



}
