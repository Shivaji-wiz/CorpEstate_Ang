import { Component } from '@angular/core';
import { userDTO } from './Models/DTOs/userDTO';
import { CRUDFunctionsService } from './Services/crud-functions.service';
import { Property } from './Models/Property';
import { APIResponse } from './Models/APIResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CorpEstate_UI';
  // users: userDTO[] = [];

  // constructor(private crudFunctionsService: CRUDFunctionsService){}
  // properties: Property[] = [];

  // ngOnInit() {
  //   this.crudFunctionsService.getAllProperties().subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this.properties = response.result;
  //       console.log(this.properties); 
  //     },
  //     error: (error) => {
  //       console.error(error);
  //     }
  //   });
  // }
}
