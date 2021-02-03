import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostService} from '../host/host.service';


@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  myHomeLists !:any
  id!:any

  constructor(
    private hostService: HostService,
    private router : Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadData()
    
    
  }
  loadData(){
    this.hostService.getmyHomeList().subscribe(
      data=>{
        this.myHomeLists = data
      },error=>{
        console.log(error)
      }
    )
  } 


}
