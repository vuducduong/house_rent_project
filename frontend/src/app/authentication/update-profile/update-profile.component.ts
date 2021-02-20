import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  profileForm: FormGroup;
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
    this.profileForm = new FormGroup(
      {
        'name': new FormControl(null, [Validators.required]),
        'address': new FormControl(null, [Validators.required]),
        'phone': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required),
      }
    )
  }

  getToken() {
    if(localStorage.getItem('token')){
      this.router.navigate(['update-profile']);
    }
  }

  loadData(){
    this.id = localStorage.getItem('id');

    this.authService.getUser(this.id).subscribe(
      data => {

        this.user = data;
        console.log(this.user);
      },
      error =>{ console.log(error)}
    );
  }

  updateUser() {
    this.authService.updateUser(this.id, this.user).subscribe(
      data => {
        console.log(data)
        // this.user = new User();
        this.loadData();
      this.toastr.success("Cập nhật thông tin thành công");
    }, error => {this.toastr.error('Cập nhật thông tin không thành công')})

    }


    cancel(){
      this.router.navigate(['']);

    }

}
