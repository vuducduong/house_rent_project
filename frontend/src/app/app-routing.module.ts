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

const routes: Routes = [
  {path:'',component: HomeComponent},


//MyHomeList
  {path:'house/create-house',component:CreateHouseComponent},
  {path:'house/edit-house/:id',component:UpdateHouseComponent},

  {path:'house',component: HouseComponent},

  {path:'house-detail/:id',component: HomeDetailComponent},

  {path: 'login', component: LoginComponent},

  {path: 'register', component: RegisterComponent},

  {path: 'update-profile', component: UpdateProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
