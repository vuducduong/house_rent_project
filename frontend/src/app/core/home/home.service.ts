import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
private baseUrl="http://127.0.0.1:8000/api/house";
private Url="http://127.0.0.1:8000/api/booking";

  constructor(private http:HttpClient) { }

  getHouseList(){
    // var auth_token = localStorage.getItem("AccessToken");
    // var reqHeader = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   // cu phap co dau cach dang sau Bearer
    //   'Authorization': 'Bearer ' + auth_token
    // });
    return this.http.get(`${this.baseUrl}`);
    // ,{headers: reqHeader})
  }
  getHouse(id: any){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  booking(value: any){
    return this.http.post(`${this.Url}`,value)
  }

  getBooking(id: any){
    return this.http.get(`${this.Url}/${id}`)
  }
  getSearchHouser(value: any) {
    return this.http.post(`${this.baseUrl}/search`, {
      search: value
    });
  }

}
