import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  navbarCollapsed = true;
  v = 'false';
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  ngOnInit() {
    if (localStorage.getItem('logged') == 'true') {
    this.v = 'true';
    }
    else{ let v = 'false';}
  }
}