import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from './booking';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HouseService } from 'src/app/service/house.service';
import { House } from 'src/app/model/houses/houses';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  [x: string]: any;
booking!: any;
id!: any;
house!: any;
  constructor(
    private bookingService: HomeService,
    private router : Router,
    private notificationService: ToastrService,
    private houseService: HouseService,
    private route: ActivatedRoute


  ) { }

  ngOnInit(): void {
    this.booking = new Booking();
    this.id= localStorage.getItem("id")
    this.bookingForm = new FormGroup(
      {
        'startDay': new FormControl(null, [Validators.required]),
        'endDay': new FormControl(null, Validators.required),
      }
    )
    
    this.id1 = this.route.snapshot.params['id'];
    console.log(this.id1)
    this.house = new House();

    this.houseService.getHouseById(this.id1).subscribe(
      data => {
       
        this.house = data;
        console.log(this.house)
      },error => console.log(error)

    )
  }

  createBooking(){
    this.booking.house_id=this.id1
    
    this.booking.users_id=this.id;
    this.booking.image =this.srcImg;
    this.house.status = "Đang muốn thuê !"
    console.log(this.house)
    this.houseService.updateHouse(this.id1, this.house).subscribe(

      data => {
        console.log(data);
        
      }, error => console.log(error));
    
    
    this.bookingService.booking(this.booking).subscribe(
      (data: any) => {
        console.log(data);
        this.showToasterSuccess();
        this.booking = new Booking();
        this.router.navigate(['']);
      },
      (error: any) => {
        console.log(error)
      }
      
    )
    
  }

  showToasterSuccess(){
    this.notificationService.success('Đã gửi yêu cầu đến chủ nhà .', 'Thông báo !');
  }

  showToasterError() {
    this.notificationService.error(
      'Gửi yêu cầu không thành công'
    );
  }

}