import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';
import { Property } from '../../../Models/Property';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private adminService: AdminService){

  }

  unApprovedProperties: Property[] = [];

  ngOnInit(){
    this.adminService.getUnapprovedProperties().subscribe({
      next: (response) => {
        console.log(response);
        this.unApprovedProperties = response.result;
        console.log(this.unApprovedProperties);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
