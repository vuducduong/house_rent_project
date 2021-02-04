import { Component, Host, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostService } from '../host.service';
import {House} from "../host";

@Component({
  selector: 'app-update-home',
  templateUrl: './update-home.component.html',
  styleUrls: ['./update-home.component.css']
})
export class UpdateHomeComponent implements OnInit {
  id!: number;
  house!: House;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hostService: HostService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.house = new House();

    this.hostService.getHost(this.id).subscribe(
      data => {
        // @ts-ignore
        this.house = data;
      },error => console.log(error)

    )
  }
  updateHost() {
    this.hostService.updateHost(this.id, this.house).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['myHomeList']);
      }, error => console.log(error));
  }
  cancel(){
    this.router.navigate(['myHomeList']);

  }


}
