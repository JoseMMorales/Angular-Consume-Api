import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toast: ToastrService) { }

  showSuccess(title: string, text: string){
    this.toast.success(title, text);
  }

  showError(title: string, text: string){
    this.toast.error(title, text);
  }
}
