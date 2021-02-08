import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  loginSytem: boolean = false;
  email!: string;
  password!: string;
  result: Observable<any>;
  submitted: boolean = false;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  getToken(){
    this.submitted = true;
    this.authService.login(this.email, this.password).subscribe(
      data => {
        localStorage.setItem('token', data[1]);
        localStorage.setItem('id', data[0].id)
        this.toastr.success("Đăng nhập thành công !")
        this.router.navigate(['thuenha.com.vn']);
    },
    error => this.toastr.error("Tài khoản hoặc mật khẩu không đúng") )

}

}
