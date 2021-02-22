import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
houses!: any;
  constructor(
    private homeService: HomeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.homeService.getHouseList().subscribe(
      data => {
        this.houses = data;
      }, error => {
        console.log(error);
      }
    );
  }

  viewHouse(id: any){
    this.router.navigate(['house-detail/' + id]);
  }

  search(event){
    let name = event.target.value;
    this.homeService.getSearchHouser(name).subscribe(res => {
      this.houses = res;
      console.log(res);
    }, error => {
      console.log(error);
    }
    );
  }

}
