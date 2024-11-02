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
  private api = 'http://0.0.0.0:8000/'
  

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
  console.log("url del fetch",`${this.api}users/${id}`)
  return this.http.get<any>(`${this.api}users/${id}/`)
}

deleteId(id:number){
  console.log(`${this.api}users/${id}`)
  return this.http.delete<any>(`${this.api}users/${id}`)
}

updateUser(userId: number, user: Partial<User>) {
  console.log("ruta para actualizar: ",`${this.api}${userId}`)
  return this.http.put(`${this.api}users/${userId}`, user);
}


}
