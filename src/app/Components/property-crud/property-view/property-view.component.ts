import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/Models/Property';
import { CRUDFunctionsService } from 'src/app/Services/crud-functions.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css']
})
export class PropertyViewComponent {
  property: Property = new Property();

  constructor(private route: ActivatedRoute, private crudFunctionsService: CRUDFunctionsService, private router: Router, private userService: UserService) { }

  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      const propertyId = params['propertyId'];
      console.log(token);
      console.log(propertyId);

      this.crudFunctionsService.getPropertyById(propertyId).subscribe({
        next: (response) => {
          console.log(response);
          this.property = response.result;
        },
        error: (error) => {
          console.error(error);
        }
      })
    })
  }
  
  isLoggedIn() {
    return this.userService.isAuthenticated();
  }

  closeModal(): void {
    this.router.navigate(['/dashboard'], { queryParams: { token: this.userService.getToken() } });
  }

}
