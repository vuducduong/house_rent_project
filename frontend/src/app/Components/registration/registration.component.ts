import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name!: string;
  email!: string;
  password!: string;
  submitted: boolean = false;
  constructor(private userService: RegistrationService,
    private router: Router,
    private notificationService: NotificationService)
 { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    this.register();
  }
  showToasterSuccess() {
    this.notificationService.showSuccess('Đăng ký thành công.', 'Thông báo !');
  }
  showToasterError() {
    this.notificationService.showError(
      'Đăng ký thất bại',
      'email của quý khách đã có người sử dụng'
    );
  }

  register(){
    this.userService.register({
      name: this.name,
      email: this.email,
      password: this.password,
    }).subscribe((data)=>{
      this.showToasterSuccess();
      this.router.navigate(['login']);
    });
  }
}
