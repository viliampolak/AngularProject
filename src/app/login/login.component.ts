import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogIntoService } from '../log-into.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    public login: LogIntoService,
    public router: Router,
    public usersServ: UserService
  ) {}
  
  // email = new FormControl('');
  // password = new FormControl('');

  // validate() {
  //   if (
  //     this.usersServ.users.find(
  //       ({ email, password}) => username == this.username.value && password == this.password.value
  //     )
  //     ) {
  //       console.log('works');

  //       this.login.saveData('login',this.username.value);
  //       this.router.navigate(['/listuser']);
  //     } else {
  //       this.router.navigate(['/login']);
  //     }
  //   }

  
    ngOnInit() {}
    }
