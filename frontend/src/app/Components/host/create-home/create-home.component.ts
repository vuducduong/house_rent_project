import { Component, OnInit } from '@angular/core';
import {House} from '../host';
import { ActivatedRoute, Router } from "@angular/router";
import { HostService } from "../host.service"


@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {
  house!:any;
  id!:any;

  constructor(
    private houseService: HostService,
    private router : Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.house = new House();

  }

  createHouse(){

    console.log(this.house);
    this.houseService.createHouse(this.house).subscribe(
      (data: any) => {
        console.log(data);
        this.house = new House();
        this.router.navigate(['myHomeList']);
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
  cancel(){
    this.router.navigate(['myHomeList']);

  }
  }

