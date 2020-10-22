import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phoneNumber: [''],
      address: ['']
    });
  }
  registers() {
    console.log(this.registerForm.value);
  }

}
