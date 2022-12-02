import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-feedback',
  templateUrl: './add-edit-feedback.component.html',
  styleUrls: ['./add-edit-feedback.component.css']
})
export class AddEditFeedbackComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() feedback:any;
  FeedbackId:string;
  Email:string;
  UserId:string;
  Content:string;

  ngOnInit(): void {
    this.FeedbackId=this.feedback.FeedbackId;
    this.Email=this.feedback.Email;
    this.UserId=this.feedback.UserId;
    this.Content=this.feedback.Content;
  }

  addFeedback(){
    var val = {FeedbackId:this.FeedbackId,
                Email:this.Email,
                UserId:this.UserId,
                Content:this.Content};
    this.service.addFeedback(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateFeedback(){
    var val = {FeedbackId:this.FeedbackId,
                Email:this.Email,
                UserId:this.UserId,
                Content:this.Content};
    this.service.updateFeedback(val).subscribe(res=>{
    alert(res.toString());
  });
  }

}
