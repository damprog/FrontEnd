import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-package',
  templateUrl: './show-package.component.html',
  styleUrls: ['./show-package.component.css']
})
export class ShowPackageComponent implements OnInit {

  constructor(private service:SharedService) { }

  PackageList:any=[];

  ModalTitle:string;
  ActivateAddEditPackageComp:boolean=false;
  @Input() package:any;

  ngOnInit(): void {
    this.refreshPackageList();
  }

  addClick(){
    this.package={
      PackageId:0,
      PackageName:"",
      Price:0
    }
    this.ModalTitle="Add Package";
    this.ActivateAddEditPackageComp=true;
  }

  editClick(item){
    this.package=item;
    this.ModalTitle="Edit Package";
    this.ActivateAddEditPackageComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deletePackage(item.PackageId).subscribe(data=>{
        alert(data.toString());
        this.refreshPackageList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditPackageComp=false;
    this.refreshPackageList();
  }


  refreshPackageList(){
    this.service.getPackageList().subscribe(data=>{
      this.PackageList=data
    });
  }

}
