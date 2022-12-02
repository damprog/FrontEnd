import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:UserService) { }


  @Input() user:any;
  UserId:string;
  UserName:string;
  Admin:string;
  PhotoFileName:string;
  Package:string;
  Password:string;
  Email:string;

  ngOnInit(): void {
    this.user={
      UserId:0,
      UserName:"",
      Admin:false,
      PhotoFileName:"default",
      Package:1,
      Password:""
   }

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
}
