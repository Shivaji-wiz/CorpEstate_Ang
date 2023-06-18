import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIResponse } from 'src/app/Models/APIResponse';
import { Property } from 'src/app/Models/Property';
import { CRUDFunctionsService } from 'src/app/Services/crud-functions.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent {
  propertyId!:number;
  property!: any;

  constructor(private route: ActivatedRoute, private crudService:CRUDFunctionsService){}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.propertyId = params['id'];
    });
  }

  getPropertyDetails(): void {
    if(!this.propertyId) {
      console.error('Property Id is required!');
      return;
    }

    this.crudService.getPropertyById(this.propertyId).subscribe({
      next: (response: APIResponse) => {
        if(response.isSuccess) {
          this.property = response.result;
          console.log('Property Details:', this.property);
        }else{
          console.error('Failed to retrieve property', response.errorMessages);
        }
      },
      error: (error) => {
        console.error('Failed operation',error);
      }
    });
  }
}
