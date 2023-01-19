import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,AppRoutingModule],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent, LoginComponent],
})
export class AppModule {}
