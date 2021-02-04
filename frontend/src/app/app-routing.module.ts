import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailComponent } from './Components/home/home-detail/home-detail.component';
import { HomeComponent } from './Components/home/home.component';
import { CreateHomeComponent } from './Components/host/create-home/create-home.component';
import { HostComponent } from './Components/host/host.component';
import { UpdateHomeComponent } from './Components/host/update-home/update-home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';

const routes: Routes = [
  {path:'',component: HomeComponent},


//MyHomeList
  {path:'myHomeList',component: HostComponent},
  {path:'myHomeList/createHome',component:CreateHomeComponent},
  {path:'myHomeList/edit/:id',component:UpdateHomeComponent},



  {path:'homes',component: HomeComponent},

  {path:'myHomeList',component: HostComponent},
  
  {path:'houseDetail/:id',component: HomeDetailComponent},

  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
