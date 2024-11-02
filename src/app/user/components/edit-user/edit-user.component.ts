import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { User } from '../../model/user';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup;
  user_id: number;
  user: User | null = null;

  constructor(
    private usersService: UsersService,

    private router: Router
  ) {
    this.user_id = Number(localStorage.getItem("id"));

    // Inicializa el formulario
    this.editForm = new FormGroup({
      username: new FormControl('', Validators.required),
      nombres: new FormControl('', Validators.required),
      apellidoP: new FormControl('', Validators.required),
      apellidoM: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.fetchUserData();
    console.log("id: " ,this.user_id)
  }

  // Obtiene los datos del usuario
  fetchUserData(): void {
    this.usersService.getById(this.user_id).subscribe({
      next: (user: User) => {
        this.user = user;
        this.editForm.setValue({
          username: user.username,
          nombres: user.nombres,
          apellidoP: user.apellidoP,
          apellidoM: user.apellidoM,
          sexo: user.sexo
        });
      },
      error: (error) => {
        console.error('Error al obtener los datos del usuario:', error);
      }
    });
  }

  // Actualiza los datos del usuario
  onUpdate(): void {
    if (this.editForm.valid) {
      const updatedUser = this.editForm.value;
      this.usersService.updateUser(this.user_id, updatedUser).subscribe({
        next: () => {
          console.log('Usuario actualizado correctamente');
          this.router.navigate(['profile']); 
        },
        error: (error) => {
          console.error('Error al actualizar usuario:', error);
        }
      });
    }
  }
}
