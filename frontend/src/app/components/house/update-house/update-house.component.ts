import { Component, Host, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { House } from 'src/app/model/houses/houses';
import { HouseService } from '../../../service/house.service';

@Component({
  selector: 'app-update-home',
  templateUrl: './update-house.component.html',
  styleUrls: ['./update-house.component.css']
})
export class UpdateHouseComponent implements OnInit {
  id!: number;
  house!: House;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private houseService: HouseService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.house = new House();

    this.houseService.getHouse(this.id).subscribe(
      data => {
        // @ts-ignore
        this.house = data.houses;
      },error => console.log(error)

    )
    this.editForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      'type': new FormControl(null, Validators.required),
      'pricePerDay': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'amountOfbedrooms': new FormControl(null, Validators.required),
      'amountOfbathrooms': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'status': new FormControl(null, Validators.required),

    })
  }
  updateHost() {
    this.houseService.updateHouse(this.id, this.house).subscribe(
      data => {
        console.log(data);
        this.toastrService.success("Chinh sua thành công");
        this.router.navigate(['house']);
      }, error => console.log(error));
  }
  cancel(){
    this.toastrService.error("Chinh sua thất bại")
    this.router.navigate(['house']);

  }


}
