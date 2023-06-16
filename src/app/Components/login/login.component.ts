import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username!: string;
  password!: string;

  constructor(private router: Router){

  }

  ngOnInit(){
    document.body.className = 'bg-login';
  }


  onSubmit() {
    // Handle login logic here
    // You can use the username and password values
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
    if(this.username==="AdminA" && this.password==="AdminA@123"){
      this.router.navigate(['/admin-dashboard']);
    }else if(this.username==="user" && this.password==="user@123"){
      this.router.navigate(['/dashboard'])
    }
  }
}
