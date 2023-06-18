import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminDashboardComponent } from './Components/dashboard/admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './Components/forgot-password-function/forgot-password/forgot-password.component';
import { EnterEmailComponent } from './Components/forgot-password-function/enter-email/enter-email.component';
import { CreatePropertyComponent } from './Components/property-crud/create-property/create-property.component';
import { UpdatePropertyComponent } from './Components/property-crud/update-property/update-property.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { PropertyDetailsComponent } from './Components/property-details/property-details.component';
import { BuyerDashboardComponent } from './Components/dashboard/buyer-dashboard/buyer-dashboard.component';
import { UserDetailsComponent } from './Components/user-info/user-details/user-details.component';
import { UserPropertiesComponent } from './Components/user-info/user-properties/user-properties.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AdminDashboardComponent,
    ForgotPasswordComponent,
    EnterEmailComponent,
    CreatePropertyComponent,
    UpdatePropertyComponent,
    ViewPropertyComponent,
    PropertyDetailsComponent,
    BuyerDashboardComponent,
    UserDetailsComponent,
    UserPropertiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
