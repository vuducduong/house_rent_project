import { HomeService } from '../home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
house!:any;
id!:any
  constructor(
    private houseService:HomeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadData();
  }

  loadData(){
    this.houseService.getHouse(this.id).subscribe(
      data=>{
        this.house=data
        console.log(this.id)
      },error=>{
        console.log(error);
      }
    )
  }

}
