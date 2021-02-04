import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../users/user';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: User = new User();
  submitted: boolean = false;
  constructor(private userService: RegistrationService,
    private router: Router,
    private toastrService: ToastrService)
 { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.submitted = true;
    this.register();
  }



  register(){
    this.userService
      .register(this.user).subscribe( data => {
          this.toastrService.success("Đăng ký thành công")
          this.user = new User();
          this.router.navigate(['login']);
        },
      error => this.toastrService.error("Đăng ký thất bại"))
  }

  // this.loginService.login(this.email, this.password).subscribe(
  //   data => {
  //     this.toastr.success("Đăng nhập thành công !")
  //     localStorage.setItem('AccessToken', data.token);
  //     this.router.navigate(['homes']);
  // },
  // error => this.toastr.error("Tài khoản hoặc mật khẩu không đúng") )


}
