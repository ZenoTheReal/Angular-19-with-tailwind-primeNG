import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OtpComponent } from './auth/otp/otp.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'otp', component: ForgotPasswordComponent },
  { path: 'otp', component: OtpComponent },
  { path: '**', redirectTo: "/login" }
];
