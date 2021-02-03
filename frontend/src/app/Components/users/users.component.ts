import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users!:any
id!: any
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.userService.getUserList().subscribe(
      data=>{
        this.users=data
      },error=>{
        console.log(error);
      }
    )
  }

}
