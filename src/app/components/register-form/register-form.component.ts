import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../user/model/user';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private usersService: UsersService, private router: Router){
    this.registerForm = new FormGroup({

      username: new FormControl (''),
      nombre: new FormControl (''),
      apellidoP: new FormControl (''),
      apellidoM: new FormControl (''),
      CURP: new FormControl (''),
      sexo: new FormControl (''),
      rol: new FormControl ('')

    })

  }

onRegister() {

  const {username, nombre, apellidoP, apellidoM, CURP, sexo, rol} = this.registerForm.value

  const newUser = new User(username, nombre, apellidoP, apellidoM, CURP, sexo, rol)

  this.usersService.registerUser(newUser)

   if (newUser.rol === 'companion') {
    this.router.navigate(['companion']);
  } else if (newUser.rol === 'accompanied') {
    this.router.navigate(['accompanied']);
  } 
} 

}
