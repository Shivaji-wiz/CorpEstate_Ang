import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';
import { Property } from '../../../Models/Property';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { approvePropertyDTO } from 'src/app/Models/DTOs/approvePropertyDTO';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private adminService: AdminService, private userService: UserService,private route: ActivatedRoute, private router: Router){

  }

  unApprovedProperties: Property[] = [];
  token!: string;



  ngOnInit(){
    document.body.className = 'bg-dashboard';
    // this.adminService.getUnapprovedProperties().subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.unApprovedProperties = response.result;
    //     console.log(this.unApprovedProperties);
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   }
    // });

    this.route.queryParams.subscribe({
      next: (params) => {
        this.token = params['token'];
        this.adminService.setToken(this.token);
        this.adminService.getUnapprovedProperties().subscribe({
          next: (response) => {
            console.log(response.result);
            this.unApprovedProperties = response.result;
          },
          error: (error) => {
            console.log('Failed to retrieve unapproved properties:', error);
          }
        });
      }
    });
  }

  rejectProperty(propertyId: number): void {
    this.adminService.deleteProperty(propertyId).subscribe({
      next: () => {
        this.unApprovedProperties = this.unApprovedProperties.filter(
          (prop) => prop.property_ID !== propertyId
        );
      },
      error: (error) => {
        console.error('Failed to delete property:',error);
      }
    });
  }

  approveProperty(existingProperty: Property): void {

    const approvePropertyData: approvePropertyDTO = {
      property_ID: existingProperty.property_ID,
      property_Name: existingProperty.property_Name,
      property_Price: existingProperty.property_Price,
      property_Description: existingProperty.property_Description,
      imageUrl: existingProperty.imageUrl,
      property_ApprovedTime: new Date(),
      userID: existingProperty.userID,
      seller_Name: existingProperty.seller_Name,
      seller_Contact: existingProperty.seller_Contact,
      approved: true
    };

    this.adminService.approveProperty(existingProperty.property_ID,approvePropertyData).subscribe({
      next: () => {
        this.unApprovedProperties = this.unApprovedProperties.filter(
          (prop) => prop.property_ID !== existingProperty.property_ID
        );
         console.log('Property Approved Successfully!');
      },
      error: (error) => {
        console.error('Failed to approve Property:', error);
      }
    });
  }

  CreatePage(): void {
    this.router.navigate(['/create-property'], { queryParams: { token: this.userService.getToken() } });
  }

  SellerDashboardPage(): void {
    this.router.navigate(['/dashboard'], { queryParams: { token: this.userService.getToken() } });
  }

  UserDetailsPage(): void {
    this.router.navigate(['/user-details'], { queryParams: { token: this.userService.getToken() } });
  }

  logOut(): void {
    this.userService.logoutUser();
    this.router.navigate(['']);
  }
}
