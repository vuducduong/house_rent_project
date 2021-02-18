import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginSytem: boolean = false;
  email!: string;
  password!: string;
  result: Observable<any>;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required),
      }
    )
  }

  getToken(){
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      data => {
        console.log('data', data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.user.id);
        setTimeout( () => {
          window.location.reload();
        }, 1000);
        this.toastr.success("Đăng nhập thành công !")
        this.router.navigate(['']);
    },
    error => this.toastr.error("Tài khoản hoặc mật khẩu không đúng") )

}

get passWord(){
  return this.loginForm.get('password')
}

}
