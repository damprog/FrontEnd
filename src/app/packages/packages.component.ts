import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(private service:SharedService) { }

  PackageList:any=[];

  // currentPackageToSend:any;
  // @Output() packageToSend = new EventEmitter<any>();

  // @Input() package:any;

  ngOnInit(): void {
    this.refreshPackageList();
  }

  refreshPackageList(){
    this.service.getPackageList().subscribe(data=>{
      this.PackageList=data
    });
  }

  sendPackage(item:any){
    // this.currentPackageToSend=item;
    // this.packageToSend.emit(this.currentPackageToSend);
    this.service.setCurrentPackage(item);
  }
  
}



