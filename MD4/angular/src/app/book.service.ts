import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  protected baseUrl = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }

  getListBook() {
    return this.http.get(`${this.baseUrl}`);
  }

  createBook(value: any){
    return this.http.post(`${this.baseUrl}`,value);
  }

  updateBook(id: number,value: any){
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  getBook(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  deleteBook(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
