import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  UserList:any=[];

  ModalTitle:string;
  ActivateAddEditUserComp:boolean=false;
  @Input() user:any;

  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick(){
    this.user={
      UserId:0,
      UserName:"",
      Admin:false,
      PhotoFileName:"",
      Package_id:1,
      Password:""
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditUserComp=true;
  }

  editClick(item){
    this.user=item;
    this.ModalTitle="Edit User";
    this.ActivateAddEditUserComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteUser(item.UserId).subscribe(data=>{
        alert(data.toString());
        this.refreshUserList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditUserComp=false;
    this.refreshUserList();
  }


  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UserList=data
    });
  }

}
