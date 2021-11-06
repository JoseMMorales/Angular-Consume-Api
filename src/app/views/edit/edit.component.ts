import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../../interfaces/patient.interface';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  detailsPatient:Patient | undefined;

  constructor(
    private router: Router, 
    private activeRouter: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    let patientId: string = this.activeRouter.snapshot.paramMap.get('id') || '' ;
    let token = this.getToken();

    this.api.getSinglePatient(patientId).subscribe(data=>{
      console.log(data);
      
    })
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
