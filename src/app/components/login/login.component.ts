import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const users = JSON.parse(localStorage.getItem('users'));
    if (this.loginForm.invalid) {
      alert('Invalid credentials');
      return;
    }
    // tslint:disable-next-line: max-line-length
    const index = users.findIndex(user => user.customerName === this.loginForm.value.username && user.password === Number(this.loginForm.value.password));
    if (index >= 0) {
      this.router.navigate(['/orders']);
      localStorage.setItem('loggedInUser', JSON.stringify(users[index]));
    }
  }
}
