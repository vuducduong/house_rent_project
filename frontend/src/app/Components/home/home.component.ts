import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
houses!:any
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.homeService.getHouseList().subscribe(
      data=>{
        this.houses= data
      },error=>{
        console.log(error)
      }
    )
  }

}
