import { Component, OnInit } from '@angular/core';
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


  user: User = new User();
  submitted: boolean = false;
  constructor(private authService: AuthenticationService,
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
    this.authService
      .register(this.user).subscribe( data => {
          this.toastrService.success("Đăng ký thành công")
          this.user = new User();
          this.router.navigate(['login']);
        },
    error => this.toastrService.error("Đăng ký thất bại")
    )
  }
}
