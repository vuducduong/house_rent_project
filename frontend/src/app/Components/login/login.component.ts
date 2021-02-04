import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from '../token-storage.service';


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
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  getToken(){
    this.submitted = true;
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        this.toastr.success("Đăng nhập thành công !")
        localStorage.setItem('token', data[1]);
        localStorage.setItem('id', data[0].id)
        console.log('token',data.token);
        this.router.navigate(['homes']);
        window.location.reload()
    },
    error => this.toastr.error("Tài khoản hoặc mật khẩu không đúng") )

}

}
