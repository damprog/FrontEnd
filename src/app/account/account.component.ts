import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private servis:UserService) { }

  User:any;
  Admin:any;

  ngOnInit(): void {
    if(!this.servis.User){
      this.servis.logout();
    }
    this.User = this.servis.User;
    this.Admin = this.User.Admin;
  }

}
