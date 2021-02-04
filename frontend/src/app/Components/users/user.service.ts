import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl="http://127.0.0.1:8000/api/user"
  constructor(private http: HttpClient) { }

  getUserList(){
    return this.http.get(`${this.baseUrl}`)
  }

  getUser(id: any){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  updateUser(id: any, value: any){
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

}
