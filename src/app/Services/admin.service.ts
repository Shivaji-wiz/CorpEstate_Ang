import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../Models/APIResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "https://localhost:7151/api/Admin";
  constructor(private http : HttpClient) { }

  public getUnapprovedProperties(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.url}/GetUnapprovedProperties`);
  }
}
