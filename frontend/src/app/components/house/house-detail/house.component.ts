import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from 'src/app/service/house.service';

@Component({
  selector: 'app-host',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  myHomeLists !:any
  id!:any
  house: any;

  constructor(
    private houseService: HouseService,
    private router : Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.loadData()
    


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
  
}
