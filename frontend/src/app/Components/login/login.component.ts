import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  email: '';
  password: '';
  result: Observable<any>;
  submitted: boolean = false;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getToken();
    this.submitted = true;
    console.log(this.result);
  }
  getToken(){
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        localStorage.setItem('token', data[1]);
        localStorage.setItem('id', data[0].id)
        console.log('token',data.token);
        this.router.navigate(['homes']);
    },
    error => console.log(error));

}
}
