import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailComponent } from './Components/home/home-detail/home-detail.component';
import { HomeComponent } from './Components/home/home.component';
import { CreateHomeComponent } from './Components/host/create-home/create-home.component';
import { HostComponent } from './Components/host/host.component';

const routes: Routes = [
  {path:'',component: HomeComponent},

  {path:'houseDetail/:id',component: HomeDetailComponent},



//MyHomeList
  {path:'myHomeList',component: HostComponent},
  {path:'myHomeList/createHome',component:CreateHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
