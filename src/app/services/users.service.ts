import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiURL = 'http://localhost:8000/'

  constructor(private http: HttpClient) { }

  registerUser(newUser: any): Observable<any> {
    return this.http.post(`${this.apiURL}users/`, newUser, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  login(username: string, passwrd: string): Observable<any> {
    const body = { username, passwrd };
    console.log(`${this.apiURL}login/`, body); // Mover el console.log aquí
    return this.http.post<any>(`${this.apiURL}login/`, body);
}

getById(id:number){
  return this.http.get<any>(`${this.apiURL}${id}`)
}

}
