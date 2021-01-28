import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: any;
  id: any;
  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.book = new Book();
    this.service.getBook(this.id).subscribe(
      data => {
        this.book = data;
      },error => console.log(error)

    )
  }
  editBook(){
    this.service.updateBook(this.id,this.book).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['books']);
      },error => console.log(error)
    )
  }
  list(){
    this.router.navigate(['books']);
  }
}
