import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { approvePropertyDTO } from 'src/app/Models/DTOs/approvePropertyDTO';
import { CRUDFunctionsService } from 'src/app/Services/crud-functions.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent {

  property : approvePropertyDTO = new approvePropertyDTO();

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private crudService: CRUDFunctionsService) { }

  ngOnInit() {
    document.body.className = 'bg-login';

    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      const propertyId = params['propertyId'];
      console.log(token);
      console.log(propertyId);

      this.crudService.getPropertyById(propertyId).subscribe({
        next: (response) => {
          console.log(response);
          this.property = response.result;
        },
        error: (error) => {
          console.error(error);
        }
      });
    });
  }

  updateProperty(): void{
    this.crudService.updateProperty(this.property, this.userService.getToken()).subscribe({
      next: (response) => {
        console.log('Updated Successfully!! ',response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Update Failed!! ',error);
      }
    });
  }

  logOut() {
    this.userService.logoutUser();
    this.router.navigate(['']);
  }
}
