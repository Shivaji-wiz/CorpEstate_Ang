import { Component } from '@angular/core';
import { Property } from 'src/app/Models/Property';
import { CRUDFunctionsService } from 'src/app/Services/crud-functions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(private crudFunctionsService: CRUDFunctionsService) { }
  properties: Property[] = [];

  ngOnInit() {
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
}
