import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://192.168.1.68:8000'; // Cambia esto si tu FastAPI corre en otro puerto o dirección

  constructor(private http: HttpClient) { }

  // Ejemplo de una petición GET
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`); // Cambia la ruta según tu API
  }

  // Ejemplo de una petición POST
  createUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/`, data); // Cambia la ruta según tu API
  }
}
