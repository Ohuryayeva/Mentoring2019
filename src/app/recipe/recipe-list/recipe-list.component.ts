import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interface';
import { RecipeService} from "../recipe.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.getRecipes();
  }
  getRecipes(): void {
    this.recipeService.getRecipes().
      subscribe(recipes => this.recipes = recipes);
  }
  onRecipeClicked(recipe: Recipe) {
    console.log('Recipe', recipe);
    const detailsUrl = `/detail/${recipe.id}`;
    this.router.navigate([detailsUrl]);
  }
}
