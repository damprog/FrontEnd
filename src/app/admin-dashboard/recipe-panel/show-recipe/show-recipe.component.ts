import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent implements OnInit {

  constructor(private service:SharedService) { }

  RecipeList:any=[];

  ModalTitle:string;
  ActivateAddEditRecipeComp:boolean=false;
  @Input() recipe:any;

  ngOnInit(): void {
    this.refreshRecipeList();
  }

  addClick(){
    this.recipe={
      RecipeId:0,
      RecipeName:"",
      Category:"",
      VotesQuantity:0,
      AverageOpinion:0,
      Description:"",
      Ingredients:"",
      PhotoFileName:"",
      UserId_id:0
    }
    this.ModalTitle="Add Recipe";
    this.ActivateAddEditRecipeComp=true;
  }

  editClick(item){
    this.recipe=item;
    this.ModalTitle="Edit Recipe";
    this.ActivateAddEditRecipeComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteRecipe(item.RecipeId).subscribe(data=>{
        alert(data.toString());
        this.refreshRecipeList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditRecipeComp=false;
    this.refreshRecipeList();
  }

  refreshRecipeList(){
    this.service.getRecipeList().subscribe(data=>{
      this.RecipeList=data
    });
  }

}
