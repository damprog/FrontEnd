import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private service:UserService) { }

  loggedAdmin:any;
  User:any;

  ngOnInit(): void {
    this.User=this.service.User;
    if(this.User.Admin){
      this.loggedAdmin=true;
    } else{
      alert("Niedozwolony dostęp");
    }
  }

}
