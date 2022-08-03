import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name : '',
      email : '',
      password : ''
    }) ;  

  
  }

  submit(): void{
    console.log(this.form.getRawValue());

  }

}
