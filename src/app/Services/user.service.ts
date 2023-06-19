import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import { userCreateDTO } from '../Models/DTOs/userCreateDTO';
import { userLoginDTO } from '../Models/DTOs/userLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://localhost:7151/api/Auth';
  private token!: string;

  constructor(private http: HttpClient) { }

  registerUser(newUser: userCreateDTO): Observable<any> {
    return this.http.post<any>('https://localhost:7151/api/Auth/Register_User', newUser);
  }

  loginUser(user: userLoginDTO): Observable<any> {
    return this.http.post<any>('https://localhost:7151/api/Auth/Login_User', user);
  }

  logoutUser(): void{
    this.token = '';
    console.log("logout successful!");
  }

  setToken(token: string): void{
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
