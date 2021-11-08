import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../../interfaces/patient.interface';
import { ResponseI } from '../../interfaces/response.interface';
import { ApiService } from '../../services/api/api.service';
import { AlertService } from '../../services/alert/alert.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  detailsPatient:Patient | undefined;

  editForm = new FormGroup({
    nombre: new FormControl(''),
    correo: new FormControl(''),
    dni: new FormControl(''),
    direccion: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero: new FormControl(''),
    telefono: new FormControl(''),
    token: new FormControl(''),
    pacienteId: new FormControl(''),
    fechaNacimiento: new FormControl(''),
  });

  constructor(
    private router: Router, 
    private activeRouter: ActivatedRoute,
    private api: ApiService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    let patientId: string = this.activeRouter.snapshot.paramMap.get('id') || '' ;
    let token = this.getToken();

    this.api.getSinglePatient(patientId).subscribe(result=>{
       this.detailsPatient = result[0]
       this.editForm.setValue({
        nombre: this.detailsPatient.Nombre,
        correo: this.detailsPatient.Correo,
        dni: this.detailsPatient.DNI,
        direccion: this.detailsPatient.Direccion,
        codigoPostal: this.detailsPatient.CodigoPostal,
        genero: this.detailsPatient.Genero,
        telefono: this.detailsPatient.Telefono,
        token: token,
        pacienteId: patientId,
        fechaNacimiento: this.detailsPatient.FechaNacimiento,
       });
    })
  }

  getToken() {
    return localStorage.getItem('token');
  }

  submitForm(form: Patient){
    this.api.putPatient(form).subscribe(data=> {
      let response: ResponseI = data;

      if (data.status == 'ok') {
        this.alert.showSuccess('Done', 'Details Updated');
        this.router.navigate(['dashboard']);
      } else {
        this.alert.showError('Failed', response.result.error_msg);
      }
    });
  }

  delete() {
    let data: Patient = this.editForm.value;

    this.api.deletePatient(data).subscribe(data=> {
      let response: ResponseI = data;
      
      if (data.status == 'ok') {
        this.alert.showSuccess('Done', 'Patient Deleted');
        this.router.navigate(['dashboard']);
      } else {
        this.alert.showError('Failed', response.result.error_msg);
      }
    });
  }

  goBack() {
    this.router.navigate(['dashboard']);
  }
}
