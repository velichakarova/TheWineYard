import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {UserRoutingMoldule} from './user-routhing.module'
import{ NgAuthService} from './ng-auth.service'


@NgModule({
  declarations: [
    DashboardComponent, 
    SignInComponent, 
    SignUpComponent, 
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingMoldule,
  
  ],
  providers:[
    NgAuthService
  ],
  exports:[
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent
  ]
})
export class UserModule { }
