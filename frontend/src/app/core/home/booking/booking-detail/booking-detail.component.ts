import { HouseService } from './../../../../service/house.service';
import { HomeService } from './../../home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { House } from 'src/app/model/houses/houses';


@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
booking!: any;
id!: any;
users!: any;
id1!: any;
id2!: any;
house!: any;
  constructor(
    private houseService:HomeService,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private service: HouseService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.id1 = this.route.snapshot.params['id'];
    
    console.log(this.id1)
    this.house = new House();

    this.service.getHouseById(this.id1).subscribe(
      data => {
       
        this.house = data;
        // console.log(this.house)
      },error => console.log(error)

    )
    this.id = this.route.snapshot.params['id'];
    this.loadData();
    // this.id2= localStorage.getItem("id")
  }

  changeState(){
    this.house.status = "Đã có người thuê"
    console.log(this.house)
    this.service.updateHouse(this.id1, this.house).subscribe(
      data => {
        // console.log(data);
        this.router.navigate(['house'])
      }, error => console.log(error));
  }
  notChangeState(){
    this.house.status = "Còn trống"
    console.log(this.house)
    this.service.updateHouse(this.id1, this.house).subscribe(
      data => {
        // console.log(data);
        this.router.navigate(['house'])
      }, error => console.log(error));
  }

  loadData(){
    this.id = this.route.snapshot.params['id'];
    // this.booking.users_id=this.id2
    this.houseService.getBooking(this.id).subscribe(
      data=>{
        this.getUserById();
        this.booking=data
        
        console.log(data)
      },error=>{
        console.log(error);
      }
    )
  }
  getUserById(){
    this.id = localStorage.getItem('id');

    this.authService.getUser(this.id).subscribe(
      data => {

        this.users = data;
        console.log(data);
      },
      error =>{ 
        console.log(error)
      });
  }
}
