import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userCreateDTO } from 'src/app/Models/DTOs/userCreateDTO';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  // username!: string;
  // email!: string;
  // role!: string;
  // password!: string;
  newUser: userCreateDTO = new userCreateDTO();
  passwordVisible: boolean = false;

  ngOnInit() {
    document.body.className = 'bg-login';
  }

  constructor(private userService: UserService,private router: Router) { }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(): void {
    this.userService.registerUser(this.newUser).subscribe({
      next: (response) => {
        console.log(this.newUser.name);
        console.log(this.newUser.email);
        console.log(this.newUser.roleName);
        console.log(this.newUser.password);
        console.log('Registration successful!', response);
        alert('Your Id: ' + response.id );
        this.resetForm();
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed!', error);
      }
    });
  }

  resetForm(): void{
    this.newUser = new userCreateDTO();
  }
}
