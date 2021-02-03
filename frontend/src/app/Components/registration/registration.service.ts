import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(user: Object): Observable<Object>{
    return this.http.post(`http://127.0.0.1:8000/api/registration`, user);
  }
}
