import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  xs: number[] = [
    1
  ];
  constructor(private service:SharedService) { }

  RecipeList:any=[];

  ngOnInit(): void {
    this.refreshRecipeList();
  }

  refreshRecipeList(){
    this.service.getRecipeList().subscribe(data=>{
      this.RecipeList=data
    });
  }

}
