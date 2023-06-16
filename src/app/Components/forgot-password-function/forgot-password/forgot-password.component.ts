import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  password1!: string;
  password2!: string;

  constructor(private router: Router){

  }

  ngOnInit(){
    document.body.className = 'bg-login';
  }

  onSubmit() {
    if(this.password1 !=null && this.password2 !=null){

      if(this.password1 != this.password2){
        alert("Password doesn't match!");
      }

      else{
        console.log('Email: ' + this.password1);
        this.router.navigate(['/login']);
      }
    }

    else{
      alert("Fields are Empty!");
    }
  }
}
