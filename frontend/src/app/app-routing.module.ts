import { BookingDetailComponent } from './core/home/booking/booking-detail/booking-detail.component';
import { BookingComponent } from './core/home/booking/booking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailComponent } from './core/home/home-detail/home-detail.component';
import { HomeComponent } from './core/home/home.component';
import { CreateHouseComponent } from './components/house/create-house/create-house.component';
import { UpdateHouseComponent } from './components/house/update-house/update-house.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HouseComponent } from './components/house/house-detail/house.component';
import { UpdateProfileComponent } from './authentication/update-profile/update-profile.component';
import { LoginComponent } from './authentication/login/login.component';
import { ChangePasswordComponent } from './authentication/change-password/change-password.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  // {path:'home',component: HomeComponent},



//MyHomeList
  {path:'house/create-house',component:CreateHouseComponent},
  {path:'house/edit-house/:id',component:UpdateHouseComponent},

  {path:'house',component: HouseComponent},

  {path:'house-detail/:id',component: HomeDetailComponent},

  {path: 'login', component: LoginComponent},

  {path: 'register', component: RegisterComponent},

  {path: 'update-profile', component: UpdateProfileComponent},



  {path: 'house-detail/:id/booking/edit-house', component: BookingComponent, pathMatch: 'full'},

  {path: 'house/booking-detail/:id', component: BookingDetailComponent},




  {path: 'change-password', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
