import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() user:any;
  UserId:string;
  UserName:string;
  Admin:string;
  PhotoFileName:string;
  Package:string;
  Password:string;

  ngOnInit(): void {
    this.UserId=this.user.UserId;
    this.UserName=this.user.UserName;
    this.Admin=this.user.Admin;
    this.PhotoFileName=this.user.PhotoFileName;
    this.Package=this.user.Package;
    this.Password=this.user.Password;
  }

  addUser(){
    var val = {UserId:this.UserId,
                UserName:this.UserName,
                Admin:this.Admin,
                PhotoFileName:this.PhotoFileName,
                Package:this.Package,
                Password:this.Password};
    this.service.addUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateUser(){
    var val = {UserId:this.UserId,
                UserName:this.UserName,
                Admin:this.Admin,
                PhotoFileName:this.PhotoFileName,
                Package:this.Package,
                Password:this.Password};
    this.service.updateUser(val).subscribe(res=>{
    alert(res.toString());
  });
  }

}
