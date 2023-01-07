import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  constructor(private location: Location) {}

  ngOnInit() {
    if (true == true) {
      this.location.replaceState('login');
    }
  }

  name = 'Viliam';
  loged = false;
}
