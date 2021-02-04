import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  isLoggedIn = localStorage.getItem('token');

  title = 'frontend';

  constructor(private router: Router,
    ){}

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login']);
    window.location.reload()
  }
}

