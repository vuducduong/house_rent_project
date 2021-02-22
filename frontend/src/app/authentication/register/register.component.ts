import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/users/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: User;
  constructor(private authService: AuthenticationService,
    private router: Router,
    private toastrService: ToastrService)
 { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
    })
  }


  onSubmit(){
    this.register();
  }



  register(){
    this.user = new User(
      this.registerForm.value.name,
      this.registerForm.value.email,
      this.registerForm.value.password,
      )
    this.authService
      .register(this.user).subscribe( data => {
        console.log(this.user)
          this.toastrService.success("Đăng ký thành công")
          this.router.navigate(['login']);
        },
    error => this.toastrService.error("Đăng ký thất bại")
    )
  }
}
