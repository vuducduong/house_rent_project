import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user!: any;
  id!: any;

  isLoggedIn = localStorage.getItem('token');
  constructor( private router: Router,
    private route: ActivatedRoute,
    private service: AuthenticationService,


    ) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.user = new User();
    this.service.getUser(this.id).subscribe(
      data => {
        this.user = data;
      },error => console.log(error)
    )
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['login']);
    setTimeout( () => {
      window.location.reload();
    }, 1000);
  }

}
