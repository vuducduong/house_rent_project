import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router)
 { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    this.register();
  }

  register(){
    this.userService.register({
      name: this.name,
      email: this.email,
      password: this.password,
    }).subscribe((data)=>{
      this.router.navigate(['login']);
    });
  }
}
