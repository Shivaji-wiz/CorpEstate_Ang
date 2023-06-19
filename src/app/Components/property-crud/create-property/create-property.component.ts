import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/Models/Property';
import { CRUDFunctionsService } from 'src/app/Services/crud-functions.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent {
  newProperty: Property = new Property();
  token!: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private crudService:CRUDFunctionsService) {}

  ngOnInit() {
    document.body.className = 'bg-login';
  }

  onSubmit(): void{
    this.route.queryParams.subscribe({
      next: (params) => {
        this.token = params['token'];
        console.log(this.token);
        this.crudService.createProperty(this.newProperty,this.token).subscribe({
          next: (response) => {
            console.log(response);
            alert('Property Created Successfully!');
            this.router.navigate(['/dashboard']);
          },
          error: (error) => {
            console.log('failed to register property ,Please check details', error);
          }
        });
      }
    });
  }

  isLoggedIn() {
    return this.userService.isAuthenticated();
  }

  logOut() {
    this.userService.logoutUser();
    this.router.navigate(['']);
  }
}
