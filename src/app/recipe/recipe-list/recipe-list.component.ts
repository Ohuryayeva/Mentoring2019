import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interface';
import { RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }
  getRecipes(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeClicked(recipe: Recipe) {
    // redirect to recipe details
  }
}
