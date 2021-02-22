import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ConfirmedValidator } from './validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup = new FormGroup({});
  id!: any;
  user!: any;
  password!: any;
  newPassword!: any;
  newPasswordConfirm!: any;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder) {this.changePasswordForm = fb.group({
      password: ['',[Validators.required,Validators.minLength(6), Validators.maxLength(8)]],
      newPassword: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(8)]],
      newPasswordConfirm: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(8)]]
    }, {
      validator: ConfirmedValidator('newPassword', 'newPasswordConfirm')
    }) }

  ngOnInit(): void {
    // this.changePasswordForm = new FormGroup({
    //   "password": new FormControl(null, Validators.required),
    //   "newPassword": new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
    //   "newPasswordConfirm": new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
    // })
    this.id = localStorage.getItem("id");
    this.user = this.authService.getUser("id");
    this.getToken();
  }
  get f(){
    return this.changePasswordForm.controls;
  }

  getToken(){
    if(localStorage.getItem('token')){
      this.router.navigate(['change-password']);
    }else {
      this.router.navigate([''])
    }
  }
  submit(){

    // @ts-ignore
    this.authService.changePassword(this.id, this.changePasswordForm.value.password, this.changePasswordForm.value.newPassword, this.changePasswordForm.value.newPasswordConfirm).subscribe(
      data => {
        this.toastr.success('Đổi mật khẩu thành công');
        this.router.navigate(['home']);
      },
      error => this.toastr.error("Mật khẩu không đúng") )
  }


  back(){
    this.router.navigate(['home']);
  }

}
