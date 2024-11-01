import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { User } from '../../model/user';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  private apiURL = 'http://192.168.1.68:8000/users/'
//'http://127.0.0.1:8000/users/'
//'http://192.168.1.68:8000'

  constructor(private usersService: UsersService, private router: Router, private authS: AuthService, private http: HttpClient){
    this.registerForm = new FormGroup({

      username: new FormControl ('', Validators.required),
      pass1: new FormControl ('', Validators.required),
      pass2: new FormControl ('', Validators.required),
      nombres: new FormControl ('', Validators.required),
      apellidoP: new FormControl ('', Validators.required),
      apellidoM: new FormControl ('', Validators.required),
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
    if (this.registerForm.valid) {
      const { username, pass1, nombres, apellidoP, apellidoM, sexo, rol } = this.registerForm.value;

      const newUser = {
        username: username,
        passwrd: pass1,
        nombres: nombres,
        apellidoP: apellidoP,
        apellidoM: apellidoM,
        sexo: sexo,
        rol: rol
      };
      console.log('user: ', newUser);

      // Hacer la petición directamente a la API
      this.http.post(this.apiURL, newUser, {
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
         }
      }).subscribe({
        next: (response) => {
          console.log('Usuario registrado:', response); // Maneja la respuesta de la API si es necesario
          this.authS.onLogin(rol); // Lógica de inicio de sesión según el rol del usuario
          this.router.navigate(['main']); // Redirige a la página principal
        },
        error: (error) => {
          console.error('Error al registrar usuario:', error); // Manejo de errores
          // Aquí puedes mostrar un mensaje al usuario o tomar otras acciones
        }
      });
    }









    /* const {username, pass1, nombres, apellidoP, apellidoM, sexo, rol} = this.registerForm.value

    const newUser = {
      username: username,
      passwrd: pass1,
      nombres: nombres,
      apellidoP: apellidoP,
      apellidoM: apellidoM,
      sexo: sexo,
      rol: rol
    }
    console.log("user:",newUser)

    this.usersService.registerUser(newUser).subscribe({
      next: (response) => {
        console.log('Usuario registrado:', response); // Maneja la respuesta de la API si es necesario
        this.authS.onLogin(rol); // Lógica de inicio de sesión según el rol del usuario
        this.router.navigate(['main']); // Redirige a la página principal
      },
      error: (error) => {
        console.error('Error al registrar usuario:', error); // Manejo de errores
        // Aquí puedes mostrar un mensaje al usuario o tomar otras acciones
      }
    })
    this.authS.onLogin(newUser.rol)
    this.router.navigate(['main']); */
    


  }
} 

}
