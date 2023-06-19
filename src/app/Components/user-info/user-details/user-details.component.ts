import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {


  constructor(private adminService: AdminService, private userService: UserService, private route: ActivatedRoute, private router: Router) {

  }

  UserProperties() {
    this.router.navigate(['/user-details/properties'], { queryParams: { token: this.userService.getToken() } });
  }
}
