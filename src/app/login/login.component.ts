import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  @Input() loged: boolean;
  
  log_in(): void {
    this.loged=!this.loged
    document.write("Loged : " + this.loged)
  }
}