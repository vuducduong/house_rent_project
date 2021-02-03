import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toaster: ToastrService
  ) { }
  showSuccess(message: string, title: string){
    this.toaster.success(message, title);
  }
  showError(message: string, title: string){
    this.toaster.error(message, title);
  }}
