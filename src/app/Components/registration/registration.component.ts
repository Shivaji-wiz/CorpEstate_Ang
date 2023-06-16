import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  username!: string;
  email!: string;
  role!: string;
  password!: string;
  passwordVisible: boolean = false;

  ngOnInit() {
    document.body.className = 'bg-login';
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    console.log(this.username);
    console.log(this.email);
    console.log(this.role);
    console.log(this.password);
  }
}
