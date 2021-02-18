import { Component, Host, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from 'src/app/model/houses/houses';
import { HouseService } from '../../../service/house.service';

@Component({
  selector: 'app-update-home',
  templateUrl: './update-house.component.html',
  styleUrls: ['./update-house.component.css']
})
export class UpdateHouseComponent implements OnInit {
  id!: number;
  house!: House;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private houseService: HouseService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.house = new House();

    this.houseService.getHouse(this.id).subscribe(
      data => {
        // @ts-ignore
        this.house = data;
      },error => console.log(error)

    )
  }
  updateHost() {
    this.houseService.updateHouse(this.id, this.house).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['house']);
      }, error => console.log(error));
  }
  cancel(){
    this.router.navigate(['myHomeList']);

  }


}
