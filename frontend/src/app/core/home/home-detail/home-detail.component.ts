import { AuthenticationService } from 'src/app/service/authentication.service';
import { HomeService } from '../home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
house!:any;
id!:any;
user!: any;


  constructor(
    private houseService:HomeService,
    private route: ActivatedRoute,
    private authService: AuthenticationService,

    private router : Router

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadData();
  }

  loadData(){
    this.houseService.getHouse(this.id).subscribe(
      data=>{
        this.house=data
        this.getUserById()
        console.log(this.id)
      },error=>{
        console.log(error);
      }
    )
  }
  getUserById(){
    this.id = localStorage.getItem('id');

    this.authService.getUser(this.id).subscribe(
      data => {

        this.user = data;
        console.log(data);
      },
      error =>{ 
        console.log(error)
      });
  }
  back(){
    this.router.navigate(['']);
  }
}
