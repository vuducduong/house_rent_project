import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private baseUrl="http://127.0.0.1:8000/api/house"

  constructor(private http:HttpClient) { }


  getmyHomeList(){
    return this.http.get(`${this.baseUrl}`)
  }

  createHouse(value: any){
    return this.http.post(`${this.baseUrl}/createHome`,value);
  }
  updateHouse(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  getHouse(id: number){
    return this.http.get(`${this.baseUrl}/list/${id}`);
  }


}
