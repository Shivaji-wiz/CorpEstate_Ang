import { Injectable } from '@angular/core';
import { userDTO } from '../Models/DTOs/userDTO';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../Models/APIResponse';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CRUDFunctionsService {

  private url = "https://localhost:7151/api/crud";
  constructor(private http : HttpClient) { }

  // public getUsers(): userDTO[] {
  //   let user = new userDTO();
  //   user.id = 1;
  //   user.name = "Shivaji";
  //   user.email = "shivaji@cognizant.com";
  //   user.roleName = "Admin";

  //   return [user];
  // }

  public getAllProperties(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/GetAllProperties`);
  }
}
