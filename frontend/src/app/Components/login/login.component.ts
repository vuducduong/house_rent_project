import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  id: number;
  result: Observable<any>;
  submitted = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    this.login();
  }
  showToastSuccess(){
    this.notificationService.showSuccess(
      'Đăng nhập thành công!', 'Thông báo');
  }
  showToastError(){
    this.notificationService.showError('Đăng nhập thất bại. Tài khoản hoặc mật khẩu không chính xác!', 'Thông báo');
  }
  login() {
    this.loginService.login(this.email, this.password).subscribe((data) => {
      localStorage.setItem('AccessToken', data.token);
      this.showToastSuccess();
      this.router.navigate(['homes']);

    }, error => this.showToastError());
  }

}
