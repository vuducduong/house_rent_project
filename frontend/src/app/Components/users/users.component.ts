import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ToastrService } from 'ngx-toastr'; 



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  [x: string]: any;
user!:any
id!: any
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    
  ) { }

  ngOnInit(): void {
    this.getToken();
    
    this.loadData();

    
    
  }

  getToken() {
    if(localStorage.getItem('token')){
      this.router.navigate(['myHomeList/acc']);
    }
  }

  loadData(){
    this.id = localStorage.getItem('id');

    this.userService.getUser(this.id).subscribe(
      data => {
        
        this.user = data;
        console.log(this.user);
      },
      error =>{ console.log(error)}
    );
  }
  
  updateUser() { 
    this.userService.updateUser(this.id, this.user).subscribe(
      data => {
        console.log(data)
        this.user = new User();
        this.loadData();
      this.toastr.success("Cập nhật thông tin thành công");
    }, error => {this.toastr.error('Cập nhật thông tin không thành công')})
      
    }

    cancel(){
      this.router.navigate(['myHomeList']);
  
    }
}
