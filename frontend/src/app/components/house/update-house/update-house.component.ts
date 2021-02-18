import { Component, Host, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
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
  submitted: boolean = false;

  title = "cloudsSorage";
  selectedFile: File = null;
  fb: any;
  downloadURL: Observable<string>;
  srcImg: any;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private houseService: HouseService,
    private toastrService: ToastrService,
    private storage: AngularFireStorage
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
  onSubmit(){
    this.submitted=true;
    this.updateHost();
  }
  updateHost() {
    this.house.image =this.srcImg
    this.houseService.updateHouse(this.id, this.house).subscribe(
      data => {
        console.log(data);
        this.toastrService.success("Chinh sua thành công");
        this.router.navigate(['house']);
      }, error => 
      this.toastrService.error("Chinh sua thất bại")
      );
  }
  cancel(){
    this.router.navigate(['house']);
  }
  onFileSelected(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
            }
            this.srcImg = url;
            console.log(this.fb);
          });
        })
      )
      .subscribe((url: any) => {
        if (url) {

           console.log(url);
        }
      });
  }

}
