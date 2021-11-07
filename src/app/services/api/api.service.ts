import { Injectable } from '@angular/core';
import { LoginI } from '../../interfaces/login.interface';
import { ResponseI } from '../../interfaces/response.interface';
import { PatientsList } from '../../interfaces/patientsList.interface';
import { Patient } from '../../interfaces/patient.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://api.solodata.es/";

  constructor(private http: HttpClient) { }

  loginByEMail(form: LoginI): Observable<ResponseI> {
    let address = this.url + "auth";

    return this.http.post<ResponseI>(address, form);
  }

  getAllPatients(page:number): Observable<PatientsList[]> {
    let address = this.url + "pacientes?page=" + page;
    
    return this.http.get<PatientsList[]>(address);
  }

  getSinglePatient(id: string): Observable<Patient>{
    let address = this.url + "pacientes?id=" + id;
    
    return this.http.get<Patient>(address);
  }

  putPatient(form: Patient):Observable<ResponseI> {
    let address = this.url + "pacientes";

    return this.http.put<ResponseI>(address, form);
  }

  deletePatient(form: Patient): Observable<ResponseI>{
    let address = this.url + "pacientes";
    let options = {
      header: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: form
    }
    return this.http.delete<ResponseI>(address, options);
  }
}
