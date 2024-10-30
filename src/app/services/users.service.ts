import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/model/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users:User[]=[]

  constructor() { }

  getAllUsers():User[]{
    return this.users
  }

  registerUser(newUser: User): void{
    this.users.push(newUser)

    console.log(this.users)
  }
}
