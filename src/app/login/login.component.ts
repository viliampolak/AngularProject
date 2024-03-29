import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  email: string;
  password: string;

  loginuser() {
    if (this.email == 'admin@admin' && this.password == 'admin1') {
      console.log('Logged');
      localStorage.setItem('logged', 'true');
      console.log(localStorage.getItem('logged'));
      this.router.navigate(['listuser']);
    } else {
      console.log('Wrong Username Or Password');
    }
  }

  ngOnInit() {}
}
