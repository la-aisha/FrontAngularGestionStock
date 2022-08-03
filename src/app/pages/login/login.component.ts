import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders  } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form : FormGroup;

  
  constructor(private fb : FormBuilder,
   private Http : HttpClient,
   private router :Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email : '',
      password : ''
    })
  }

  submit(): void{
    this.Http.post('http://127.0.0.1:8000/api/login_check',this.form.getRawValue(),{withCredentials : true}).
    subscribe(() => {  this.router.navigate(['/'])   ;
 
    });
  }
    
  /* 
  
  submit(): {
    this.apiService.login(this.form.get('usern'))
   
  }
    
  
  
  */
}
