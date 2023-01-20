import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(private router: Router) {}
  v = 'false';
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
    this.v = localStorage.getItem('logged');
  }

  logout() {
    localStorage.setItem('logged', 'false');
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.v = localStorage.getItem('logged');
  }
}
