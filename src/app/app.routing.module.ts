import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, LayoutComponent, AddUserComponent,ListUserComponent,EditUserComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'listuser', component: ListUserComponent },
      { path: 'adduser', component: AddUserComponent },
      { path: 'edituser', component: EditUserComponent },

      { path: '**', redirectTo: 'login' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
