import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // changePassword(id: any, password: any, newPassword: any, newPasswordConfirm: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient,
    ) { }

    private baseUrl="http://127.0.0.1:8000/api/user"

    login(email: string, password: string): Observable<any> {
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',

        // 'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
        //  'Access-Control-Allow-Headers': '*'


      });
      var data = {
        'email': email,
        'password': password
      };
      return this.http.post(`http://127.0.0.1:8000/api/login`, data, { headers: reqHeader, responseType: 'json' });
    }

    register(user: Object): Observable<Object>{
      console.log('user', user);
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

  changePassword(id: any, password: string, newPassword: string, newPasswordConfirm: string): Observable<any> {
    var data = {
      "password": password,
      "newPassword": newPassword,
      "newPasswordConfirm": newPasswordConfirm
    }
    console.log(data)
    return this.http.put(`http://127.0.0.1:8000/api/change-password/${id}`, data)
  }

}
