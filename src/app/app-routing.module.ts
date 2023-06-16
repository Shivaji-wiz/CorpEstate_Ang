import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminDashboardComponent } from './Components/dashboard/admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password-function/forgot-password/forgot-password.component';
import { EnterEmailComponent } from './Components/forgot-password-function/enter-email/enter-email.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegistrationComponent,
    path: 'register'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: AdminDashboardComponent,
    path: 'admin-dashboard'
  },
  {
    component: ForgotPasswordComponent,
    path: 'forgot-password'
  },
  {
    component: EnterEmailComponent,
    path: 'enter-email'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
