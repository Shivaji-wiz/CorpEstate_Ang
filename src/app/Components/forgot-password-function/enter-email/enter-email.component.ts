import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.css']
})
export class EnterEmailComponent {

  email1!: string;
  email2!: string;

  constructor(private router: Router){

  }

  ngOnInit(){
    document.body.className = 'bg-login';
  }

  onSubmit() {

    if(this.email1 !=null && this.email2 !=null){

      if(this.email1 != this.email2){
        alert("Email doesn't match!");
      }

      else{
        console.log('Email: ' + this.email1);
        this.router.navigate(['/forgot-password']);
      }
    }

    else{
      alert("Fields are Empty!");
    }
  }
}
