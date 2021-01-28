import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateBookComponent} from "./update-book/update-book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {ListBookComponent} from "./list-book/list-book.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";

const routes: Routes = [
  {path: "", component: ListBookComponent},
  {path: "books", component: ListBookComponent},
  {path: "books/add", component: CreateBookComponent},
  {path: "books/edit/:id", component: UpdateBookComponent},
  {path: "details/:id", component: DetailBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
