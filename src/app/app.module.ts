import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,AppRoutingModule],
  declarations: [AppComponent, LoginComponent, LayoutComponent, AddUserComponent,ListUserComponent,EditUserComponent],
  bootstrap: [AppComponent, LoginComponent],
})
export class AppModule {}
