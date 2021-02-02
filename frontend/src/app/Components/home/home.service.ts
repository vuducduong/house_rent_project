import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
private baseUrl="http://127.0.0.1:8000/api/house"
  constructor(private http:HttpClient) { }

  getHouseList(){
    return this.http.get(`${this.baseUrl}`)
  }
  getHouse(id: any){
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}
