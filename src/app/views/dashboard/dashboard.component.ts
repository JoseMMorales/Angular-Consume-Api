import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { PatientsList } from '../../interfaces/patientsList.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  patients: PatientsList[] | undefined;

  constructor(private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllPatients(1).subscribe(data => {
      this.patients = data;
    })
  }

  editPatient(id: string) {
    this.router.navigate(['edit', id]);
  }

  newPatient(){
    this.router.navigate(['new']);
  }

}
