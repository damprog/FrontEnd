import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-package',
  templateUrl: './add-edit-package.component.html',
  styleUrls: ['./add-edit-package.component.css']
})
export class AddEditPackageComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() package:any;
  PackageId:string;
  PackageName:string;
  Price:string;

  ngOnInit(): void {
    this.PackageId=this.package.PackageId;
    this.PackageName=this.package.PackageName;
    this.Price=this.package.Price;
  }

  addPackage(){
    var val = {PackageId:this.PackageId,
                PackageName:this.PackageName,
                Price:this.Price};
    this.service.addPackage(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePackage(){
    var val = {PackageId:this.PackageId,
        PackageName:this.PackageName,
        Price:this.Price};
    this.service.updatePackage(val).subscribe(res=>{
    alert(res.toString());
  });
  }
}
