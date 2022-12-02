import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-feedback',
  templateUrl: './show-feedback.component.html',
  styleUrls: ['./show-feedback.component.css']
})
export class ShowFeedbackComponent implements OnInit {

  constructor(private service:SharedService) { }

  FeedbackList:any=[];

  ModalTitle:string;
  ActivateAddEditFeedbackComp:boolean=false;
  @Input() feedback:any;

  ngOnInit(): void {
    this.refreshFeedbackList();
  }

  addClick(){
    this.feedback={
      FeedbackId:0,
      Email:"",
      UserId_id:1,
      Content:""
    }
    this.ModalTitle="Add Feedback";
    this.ActivateAddEditFeedbackComp=true;
  }

  editClick(item){
    this.feedback=item;
    this.ModalTitle="Edit Feedback";
    this.ActivateAddEditFeedbackComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteFeedback(item.FeedbackId).subscribe(data=>{
        alert(data.toString());
        this.refreshFeedbackList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditFeedbackComp=false;
    this.refreshFeedbackList();
  }


  refreshFeedbackList(){
    this.service.getFeedbackList().subscribe(data=>{
      this.FeedbackList=data
    });
  }

}
