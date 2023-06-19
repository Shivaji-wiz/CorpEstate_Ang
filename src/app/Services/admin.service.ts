import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { approvePropertyDTO } from '../Models/DTOs/approvePropertyDTO';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "https://localhost:7151/api/Admin";
  private token!: string;
  constructor(private http: HttpClient, private userService: UserService) { }

  public setToken(token: string): void {
    this.token = token;
  }

  public getUnapprovedProperties(): Observable<any> {
    const token = this.userService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    console.log(headers);
    return this.http.get<any>(`https://localhost:7151/api/Admin/GetUnapprovedProperties`, {headers});
  }

  public approveProperty(propertyId: number,approvePropertyData: approvePropertyDTO): Observable<any> {
    const token = this.userService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    console.log(headers);
    return this.http.put<any>(`${this.url}/ApproveProperty/${propertyId}`, approvePropertyData, {headers});
  }

  public deleteProperty(propertyId: number): Observable<any> {
    const token = this.userService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<any>(`https://localhost:7151/api/Admin/RejectProperty/${propertyId}`, {headers});
  }
}
