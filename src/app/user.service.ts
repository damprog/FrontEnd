import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private service:SharedService) { }

  // readonly APIUrl = "https://polar-island-77389.herokuapp.com";
  // readonly PhotoUrl = "https://polar-island-77389.herokuapp.com/media/";

  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  userName:any;
  loggedIn:any = false;
  User:any;

  logout(){
    this.User={
      UserId:0,
      UserName:"użytkowniku",
      Admin:false,
      PhotoFileName:"",
      Package:1,
      Password:""
  }
  this.loggedIn=false;

}


  // Users
  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/user/');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+ '/user/', val);
  }

}
