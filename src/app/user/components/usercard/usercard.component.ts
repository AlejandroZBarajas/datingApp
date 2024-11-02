import { Component , OnInit} from '@angular/core';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent implements OnInit{
  user_id:number 
  user : User | null = null
 

  constructor(private userService: UsersService){
    this.user_id=Number(localStorage.getItem('id'))|| 0
    console.log(this.user_id)
  }

  ngOnInit(): void {
    this.getUserById(); // Fetch user data on component initialization
  }

  getUserById(){
    this.userService.getById(this.user_id).subscribe({
      next: (response: User) => {
        console.log(response)
        this.user= response
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
  }
}
