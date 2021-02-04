import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedin: boolean = false;

  constructor(private http: HttpClient) { }
}
