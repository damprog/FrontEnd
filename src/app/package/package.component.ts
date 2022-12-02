import { Component, OnInit, Input } from '@angular/core';
import { PaypalPaymentsComponent } from '../paypal-payments/paypal-payments.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  constructor(private servis:SharedService) { }

  package:any;
  ngOnInit(): void {
    this.package=this.servis.getCurrentPackage();
  }
}
