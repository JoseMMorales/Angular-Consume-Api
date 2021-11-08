import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Patient } from 'src/app/interfaces/patient.interface';
import { ResponseI } from 'src/app/interfaces/response.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newForm = new FormGroup({
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


  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.newForm.patchValue({
      'token': token
    })
  }

  postForm(form: Patient) {
  this.api.postPatient(form).subscribe(data=> {
      console.log(data);      
   })
  }

  goBack() {
    this.router.navigate(['dashboard']);
  }
}
