import { Injectable } from '@angular/core';
import { userDTO } from '../Models/DTOs/userDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIResponse } from '../Models/APIResponse';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { createPropertyDTO } from '../Models/DTOs/createPropertyDTO';
import { UserService } from './user.service';
import { approvePropertyDTO } from '../Models/DTOs/approvePropertyDTO';

@Injectable({
  providedIn: 'root'
})
export class CRUDFunctionsService {

  private url = "https://localhost:7151/api/crud";
  // private token!: string;
  constructor(private http : HttpClient, private userService: UserService) { }

  // public getUsers(): userDTO[] {
  //   let user = new userDTO();
  //   user.id = 1;
  //   user.name = "Shivaji";
  //   user.email = "shivaji@cognizant.com";
  //   user.roleName = "Admin";

  //   return [user];
  // }

  // public setToken(token: string): void {
  //   this.token = token;
  // }

  public getAllProperties(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/GetAllProperties`);
  }

  public getPropertyById(id: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7151/api/Crud/${id}`);
  }

  public createProperty(newProperty: createPropertyDTO, token: string): Observable<any>{
    // const token = this.userService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(headers);
    return this.http.post<any>(`${this.url}/CreateNewProperty`,newProperty, {headers});
  }

  public updateProperty(property: approvePropertyDTO,token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(headers);
    return this.http.put<any>(`${this.url}/UpdateExistingProperty/${property.property_ID}`, property, {headers});
  }

  public DeleteProperty(propertyId: number,token : string): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(`${this.url}/DeleteProperty/${propertyId}`, {headers});
  }
}
