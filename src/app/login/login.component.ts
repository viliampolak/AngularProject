import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private location: Location) {}
  @Input() loged: boolean;
  log_in(): void {
    console.log('Loged : ' + this.loged);
    this.location.replaceState('one');
  }
}
