import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  onSubmit() {
    // Handle login logic here
    // You can use the username and password values
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
  }

  forgotPassword() {
    // Handle forgot password logic here
    console.log('Forgot Password clicked');
  }

  register() {
    // Handle register logic here
    console.log('Register clicked');
  }
}
