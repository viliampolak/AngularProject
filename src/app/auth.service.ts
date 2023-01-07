import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class AuthService {

  constructor(private location: Location, loged: string) { }
  login(username: string, pass: string) { 
    if(username=="john" && pass=="666"){
      this.loged=true
      this.location.go('/')
      
    }
  }
}