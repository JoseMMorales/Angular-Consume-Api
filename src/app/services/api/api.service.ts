import { Injectable } from '@angular/core';
import { LoginI } from '../../interfaces/login.interface';
import { ResponseI } from '../../interfaces/response.interface';
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
}
