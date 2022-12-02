import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.css']
})
export class AddEditRecipeComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() recipe:any;
  RecipeId:string;
  RecipeName:string;
  Category:string;
  VotesQuantity:string;
  AverageOpinion:string;
  Description:string;
  Ingredients:string;
  PhotoFileName:string;
  UserId:string;

  ngOnInit(): void {
    this.RecipeId=this.recipe.RecipeId;
    this.RecipeName=this.recipe.RecipeName;
    this.Category=this.recipe.Category;
    this.VotesQuantity=this.recipe.VotesQuantity;
    this.AverageOpinion=this.recipe.AverageOpinion;
    this.Description=this.recipe.Description;
    this.Ingredients=this.recipe.Ingredients;
    this.PhotoFileName=this.recipe.PhotoFileName;
    this.UserId=this.recipe.UserId;
  }

  addRecipe(){
    var val = {RecipeId:this.RecipeId,
                RecipeName:this.RecipeName,
                Category:this.Category,
                VotesQuantity:this.VotesQuantity,
                AverageOpinion:this.AverageOpinion,
                Description:this.Description,
                Ingredients:this.Ingredients,
                PhotoFileName:this.PhotoFileName,
                UserId:this.UserId};
    this.service.addRecipe(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateRecipe(){
    var val = {RecipeId:this.RecipeId,
      RecipeName:this.RecipeName,
      Category:this.Category,
      VotesQuantity:this.VotesQuantity,
      AverageOpinion:this.AverageOpinion,
      Description:this.Description,
      Ingredients:this.Ingredients,
      PhotoFileName:this.PhotoFileName,
      UserId:this.UserId};
    this.service.updateRecipe(val).subscribe(res=>{
    alert(res.toString());
  });
  }
}

