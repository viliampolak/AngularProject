import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { LoginComponent } from './login/login.component';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, OneComponent, TwoComponent, LoginComponent],
  bootstrap: [AppComponent, OneComponent, TwoComponent, LoginComponent],
})
export class AppModule {}
