import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
book: any;
  constructor(
    private bookService: BookService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.book = new Book();
  }
  addBook(){
    console.log(this.book);
    this.bookService.createBook(this.book).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['books']);
        this.book = new Book();
      },
      error => {
        console.log(error)
      }
    )
  }
  list(){
    this.router.navigate(['books']);
  }

}
