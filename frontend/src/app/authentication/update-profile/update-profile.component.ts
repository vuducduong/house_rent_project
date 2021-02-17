import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/users/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  [x: string]: any;
user!:any
id!: any
  constructor(
    private authService: AuthenticationService ,
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
        // this.user = new User();
        this.loadData();
      this.toastr.success("Cập nhật thông tin thành công");
    }, error => {this.toastr.error('Cập nhật thông tin không thành công')})

    }

    cancel(){
      this.router.navigate(['myHomeList']);

    }
}
