import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userLoginDTO } from 'src/app/Models/DTOs/userLoginDTO';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  // username!: string;
  // password!: string;
  user: userLoginDTO = new userLoginDTO();

  showPassword: boolean = false;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute){

  }

  ngOnInit(){
    document.body.className = 'bg-login';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  onSubmit(): void {
    this.userService.loginUser(this.user).subscribe({
      next: (response) => {
        if(this.user.name === 'AdminA' && this.user.password === 'AdminA@123'){
          this.userService.setToken(response.token);
          console.log('Admin Login Successful!', response);
          this.router.navigate(['/admin-dashboard'], {queryParams: {token: response.token}});
        }else {
          console.log('Login Successful!', response);
          this.userService.setToken(response.token);
          this.router.navigate(['/dashboard'], { queryParams: { token: response.token } });
        }
      },
      error: (error) => {
        console.error('Login failed!');
      }
    });
  }
}
