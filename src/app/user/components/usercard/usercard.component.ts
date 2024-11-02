import { Component , OnInit} from '@angular/core';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-card',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent implements OnInit{
  user_id:number 
  user : User | null = null
 

  constructor(private userService: UsersService, private router: Router){
    this.user_id=Number(localStorage.getItem('id'))|| 0
    console.log(this.user_id)
  }

  ngOnInit(): void {
    console.log("usercard component cargado")
    this.getUserById(); // Fetch user data on component initialization
  }

  getUserById(){
    console.log("card envia al servicio: ",this.user_id)
    this.userService.getById(this.user_id).subscribe({
      next: (response: User) => {
        console.log("el servicio regresa: ",response)
        this.user= response
        console.log("this.user= ",this.user)
      },
      error:(error) => {
        console.log(error)
      }
    })
  }

  toEdit(): void{
    console.log("etid mode")

  }

  toDelete():void{
    console.log("delete mode")
    this.userService.deleteId(this.user_id).subscribe({
      next:()=>{
        console.log("eliminao!")
        this.router.navigate(['/'])
      },
      error: (error) => {
        console.log("error: ",error)
      }
    })
  }
}
