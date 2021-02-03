import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailComponent } from './Components/home/home-detail/home-detail.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'houseDetail/:id',component: HomeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
