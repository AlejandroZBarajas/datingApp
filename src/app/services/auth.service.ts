import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private userId:number | null = null
  private userRol: string | null = null

  constructor() { }

  onLogin( _userRol: string){
    //this.userId= _userId
    this.userRol= _userRol
  }

  logout():void{
    //this.userId=null
    this.userRol=null
  }

 /*  getUserId(){
    return this.userId
  } */

  getUserRol(){
    return this.userRol
  }

  isLoggedIn(){
    return this.getUserRol !== null
  }
}
