import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
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

      username: new FormControl ('', Validators.required),
      pass1: new FormControl ('', Validators.required),
      pass2: new FormControl ('', Validators.required),
      nombre: new FormControl ('', Validators.required),
      apellidoP: new FormControl ('', Validators.required),
      apellidoM: new FormControl ('', Validators.required),
      CURP: new FormControl ('', Validators.required),
      sexo: new FormControl ('', Validators.required),
      rol: new FormControl ('', Validators.required)

    });
    this.registerForm.setValidators(this.passwordsMatchValidator())

  }

passwordsMatchValidator(): ValidatorFn{
  return (form: AbstractControl): {[Key: string]: any} | null => {

    const pass1 = form.get('pass1')?.value;
    const pass2 = form.get('pass2')?.value;
    return pass1 === pass2 ? null : { passwordsMismatch: true}
  }
}

onRegister() {

  if(this.registerForm.valid){
    const {username, pass1, nombre, apellidoP, apellidoM, CURP, sexo, rol} = this.registerForm.value

    const newUser = new User(username, pass1, nombre, apellidoP, apellidoM, CURP, sexo, rol)

    this.usersService.registerUser(newUser)
  
     if (newUser.rol === 'companion') {
      this.router.navigate(['companion']);
    } else if (newUser.rol === 'accompanied') {
      this.router.navigate(['accompanied']);
    } 
  }
} 

}
