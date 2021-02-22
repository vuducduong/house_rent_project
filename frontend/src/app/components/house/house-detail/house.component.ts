import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from 'src/app/model/houses/houses';
import { HouseService } from 'src/app/service/house.service';


@Component({
  selector: 'app-host',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],


})
export class HouseComponent implements OnInit {

  myHomeLists !:any;
  id!:any;
  id1!: any;
  house: any;


  constructor(
    private houseService: HouseService,
    private router : Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];

    this.id1 = this.route.snapshot.params['id'];
    // console.log(this.id1)
    this.house = new House();

    this.houseService.getHouseById(this.id1).subscribe(
      data => {

        this.house = data;
        console.log(this.house)
      },error => console.log(error)

    )
    this.loadData()

  }
  changeState(){
    this.house.status = "Đã có người thuê"
    console.log(this.house)
    this.houseService.updateHouse(this.id1, this.house).subscribe(
      data => {
        console.log(data);

      }, error => console.log(error));
  }

  loadData(){
    this.id = localStorage.getItem('id');
    this.houseService.getHouse(this.id).subscribe(
      data=>{
        this.myHomeLists = data
      },error=>{
        console.log(error)
      }
    )
  }

  getInfo() {
    this.router.navigate(['house']);
  }

  back(){
    this.router.navigate(['']);
  }


}
