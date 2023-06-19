import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { RegistrationComponent } from './Components/Authentication/registration/registration.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminDashboardComponent } from './Components/dashboard/admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password-function/forgot-password/forgot-password.component';
import { EnterEmailComponent } from './Components/forgot-password-function/enter-email/enter-email.component';
import { PropertyDetailsComponent } from './Components/property-crud/property-details/property-details.component';
import { CreatePropertyComponent } from './Components/property-crud/create-property/create-property.component';
import { UserDetailsComponent } from './Components/user-info/user-details/user-details.component';
import { UserPropertiesComponent } from './Components/user-info/user-properties/user-properties.component';
import { UpdatePropertyComponent } from './Components/property-crud/update-property/update-property.component';
import { PropertyViewComponent } from './Components/property-crud/property-view/property-view.component';

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
  },
  {
    component: PropertyDetailsComponent,
    path: 'property-detail'
  },
  {
    component: CreatePropertyComponent,
    path: 'create-property'
  },
  {
    component: UserDetailsComponent,
    path: 'user-details'
  },
  {
    component: UserPropertiesComponent,
    path: 'user-details/properties'
  },
  {
    component:UpdatePropertyComponent,
    path: 'update-property'
  },
  {
    component: PropertyViewComponent,
    path: 'view-property'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
