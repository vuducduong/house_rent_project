import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HostService {
  private baseUrl="http://127.0.0.1:8000/api/house"

  constructor(private http:HttpClient) { }


  getmyHomeList(){
    return this.http.get(`${this.baseUrl}`)
  }

  createHouse(value: any){
    return this.http.post(`${this.baseUrl}/createHome`,value);
  }
  

}
