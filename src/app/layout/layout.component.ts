import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private router: Router) {}

  navbarCollapsed = true;
  v = 'false';
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
    if (localStorage.getItem('logged') == 'true') { this.v = 'true'; }
    else { this.v = 'false'; }
  }

  logout(){
    localStorage.setItem('logged', 'false');
    this.router.navigate(['/login']);
    console.log(localStorage.getItem('logged'))
    this.v = 'false'
  }

  ngOnInit(){
    // if (localStorage.getItem('logged') == 'true') {
    //   this.v = 'true';
    //   }
  }
}