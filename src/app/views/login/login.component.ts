import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { LoginI } from '../../interfaces/login.interface';

import { Router } from '@angular/router';
import { ResponseI } from '../../interfaces/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api: ApiService, private router: Router) { }

  errorStatus: boolean = false;
  errorMessage: string = "";

  ngOnInit(): void {
  }

  onLogin(form: LoginI) {
    this.api.loginByEMail(form).subscribe(data =>{      
      let dataResponse: ResponseI = data;
      
      if (dataResponse.status == "ok") {
        localStorage.setItem("token",dataResponse.result.token);
        this.router.navigate(["dashboard"]);
      } else {
        this.errorStatus = true;
        this.errorMessage = dataResponse.result.error_msg;
      }
    });
  }
}
