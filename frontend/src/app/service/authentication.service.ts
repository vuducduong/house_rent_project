import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
    ) { }

    private baseUrl="http://127.0.0.1:8000/api/user"

    login(email: string, password: string): Observable<any> {
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
      });
      var data = {
        'email': email,
        'password': password
      };
      return this.http.post(`http://127.0.0.1:8000/api/login`, data, { headers: reqHeader, responseType: 'json' });
    }

    register(user: Object): Observable<Object>{
      return this.http.post(`http://127.0.0.1:8000/api/register`, user);
    }


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
