import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, map } from 'rxjs/operators';
import { HouseService } from 'src/app/service/house.service';
import { House } from 'src/app/model/houses/houses';



@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  house!:any;
  id!:any;
  submitted: boolean = false;

  title = "cloudsSorage";
  selectedFile: File = null;
  fb: any;
  downloadURL: Observable<string>;
  srcImg: any;

  constructor(
    private houseService: HouseService,
    private router : Router,
    private route: ActivatedRoute,
    private notificationService: ToastrService,
    private storage: AngularFireStorage) {}



  ngOnInit(): void {
    this.house = new House();

  }

  onSubmit(){
    this.submitted=true;
    this.createHouse();
  }

  createHouse(){
    this.house.image =this.srcImg
    console.log(this.house);
    this.houseService.createHouse(this.house).subscribe(
      (data: any) => {
        console.log(data);
        this.showToasterSuccess();
        this.house = new House();
        this.router.navigate(['myHomeList']);
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
  cancel(){
    this.router.navigate(['myHomeList']);

  }

  showToasterSuccess() {
    this.notificationService.success('Đã thêm mới một nhà vào trong danh sách của bạn .', 'Thông báo !');
  }

  showToasterError() {
    this.notificationService.error(
      'Thêm mới không thành công',
      'email của quý khách đã có người sử dụng'
    );
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

