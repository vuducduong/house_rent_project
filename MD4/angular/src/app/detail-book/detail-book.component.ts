import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
id: any;
book!: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id)
      .subscribe((data: any) => {
        this.book = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['books']);
  }

}
