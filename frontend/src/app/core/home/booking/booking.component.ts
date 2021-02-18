import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private houseService: HouseService


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
    this.house = new House();
  }

  createBooking(){
    this.booking.house_id=this.id;

    this.booking.users_id=this.id;
    this.booking.image =this.srcImg;
    console.log(this.booking);
    this.bookingService.booking(this.booking).subscribe(
      (data: any) => {
        console.log(data);
        this.showToasterSuccess();
        this.booking = new Booking();
        this.router.navigate(['booking']);
      },
      (error: any) => {
        console.log(error)
      }
    )
    this.houseService.updateHouse(this.id, this.house).subscribe(
      
      data => {
        this.house.status= "dang muon thue";
        console.log(data);

        this.router.navigate(['house']);
      }, error => console.log(error));
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
