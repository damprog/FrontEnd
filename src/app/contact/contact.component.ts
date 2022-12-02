import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  

  constructor(private service:SharedService) { }

  Email:string;
  UserId:string;
  Content:string;
  Send:boolean=false;

  ngOnInit() {
    this.UserId=this.service.currentUserId;
  }

  send(){
    var val = {Email:this.Email,
                UserId:this.UserId,
                Content:this.Content};
    this.service.addFeedback(val).subscribe(res=>{
      alert(res.toString());
    });

    this.formRefresh();
    this.Send=true;
  }

  formRefresh(){
    this.Email = "";
    this.Content = "";
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
  