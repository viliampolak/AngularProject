import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      // { path: 'home', component: LoginComponent },

      // { path: '**', redirectTo: 'login' }
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
