import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../interface'
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;

  defaultImageUrl = 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png';

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  removeRecipe(recipeId){
    event.stopPropagation();
    this.recipeService.removeRecipe(recipeId);
  }
}
