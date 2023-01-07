import { Component, VERSION } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  constructor(private location: Location) {}

  ngOnInit() {
    if(AuthService.loged==false){
      this.location.go('login')
    }
  }

  name = 'Viliam';
  loged = false;
}
