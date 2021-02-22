import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from './booking';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HouseService } from 'src/app/service/house.service';
import { House } from 'src/app/model/houses/houses';
import { ConfirmedValidator } from 'src/app/authentication/change-password/validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup = new FormGroup({});;
  [x: string]: any;
booking!: any;
id!: any;
house!: any;
  constructor(
    private bookingService: HomeService,
    private router : Router,
    private notificationService: ToastrService,

    private houseService: HouseService,
    private route: ActivatedRoute,
    private fb: FormBuilder


  ) {
    this.bookingForm = fb.group({
      startDay: ['',[Validators.required]],
      endDay: ['', [Validators.required]],

    }, {

    })

   }

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
    this.booking.houses_id=this.id1

    this.booking.users_id=this.id;
    this.booking.image =this.srcImg;
    

    this.bookingService.booking(this.booking).subscribe(
      (data: any) => {
        console.log(data);
        this.showToasterSuccess();

        this.booking = new Booking();

        this.router.navigate(['']);
      },
      (error: any) => {
        this.showToasterError();
      }

    )
    this.house.status = "Đang muốn thuê !"
    console.log(this.house)
    this.houseService.updateHouse(this.id1, this.house).subscribe(
      data => {
        console.log(data);

      }, error => console.log(error));




  }

  showToasterSuccess(){
    this.notificationService.success('Đã gửi yêu cầu đến chủ nhà .', 'Thông báo !');
  }

  showToasterError() {
    this.notificationService.error(
      'Gửi yêu cầu không thành công, bạn phải đăng nhập vào hệ thống'
    );
  }

  dateTime(){
    var a = new Date(this.booking.startDay).getTime();
    var b = new Date(this.booking.endDay).getTime();
    this.day = (b - a)/(1000*60*60*24);
    this.monney=this.day*this.house.pricePerDay
    console.log(this.monney)
  }


}
