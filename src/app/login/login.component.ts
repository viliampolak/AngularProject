import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogIntoService } from '../log-into.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  email: string;
  password: string;

  LoginUser() {
    console.log(this.email,this.password);
    if (this.email == 'admin@admin' && this.password == 'admin1') {
      console.log('Logged');
      localStorage.setItem('logged', 'true');
      this.router.navigate(['listuser']);
    } else {
      console.log('Wrong Username Or Password');
    }
  }

  ngOnInit() {
    if (localStorage.getItem('logged') == 'true') {
      this.router.navigate(['listuser']);
    }
  }
}
