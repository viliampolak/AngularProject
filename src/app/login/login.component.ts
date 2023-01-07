import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() loged: boolean;
  private location: Location;
  log_in(): void {
    console.log('Loged : ' + this.loged);
  }
}
