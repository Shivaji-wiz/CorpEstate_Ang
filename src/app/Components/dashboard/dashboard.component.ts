import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/Models/Property';
import { CRUDFunctionsService } from 'src/app/Services/crud-functions.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(private route: ActivatedRoute,private crudFunctionsService: CRUDFunctionsService, private router: Router, private userService: UserService) { }
  properties: Property[] = [];

  ngOnInit() {
    document.body.className = 'bg-dashboard';

    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      console.log(token);
    });

    this.crudFunctionsService.getAllProperties().subscribe({
      next: (response) => {
        console.log(response);
        this.properties = response.result;
        console.log(this.properties);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteProperty(propertyId: number): void {
    this.crudFunctionsService.DeleteProperty(propertyId,this.userService.getToken()).subscribe({
      next: () => {
        this.properties = this.properties.filter(
          (prop) => prop.property_ID !== propertyId
        );
      },
      error: (error) => {
        console.error('Failed to delete Property', error);
      }
    })
  }

  CreatePage(): void {
    this.router.navigate(['/create-property'], {queryParams: {token: this.userService.getToken()}});
  }

  PropertyUpdatePage(property: Property): void {
    this.router.navigate(['/update-property'], { queryParams: { token: this.userService.getToken(), propertyId: property.property_ID } });
  }

  ViewProperty(property: Property): void {
    this.router.navigate(['/view-property'], { queryParams: { token: this.userService.getToken(), propertyId: property.property_ID } });
  }

  isLoggedIn() {
    return this.userService.isAuthenticated();
  }

  logOut() {
    this.userService.logoutUser();
    this.router.navigate(['']);
  }
}
