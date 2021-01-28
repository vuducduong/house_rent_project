import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: any;
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.bookService.getListBook().subscribe(
      data => {
        this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe(
      data => {
        this.loadData();
      },error => console.log(error)
    )
  }
  bookDetail(id: number) {
    this.router.navigate(['details', id]);
  }

}
