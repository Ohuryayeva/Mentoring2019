import {AfterViewInit, Component} from '@angular/core';
import { Recipe } from '../../interface';
import { RecipeService} from "../recipe.service";
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Observable<Recipe[]> = this.recipeService.getFilteredRecipes();
  constructor(private recipeService: RecipeService, private router: Router) { }

  onRecipeClicked(recipe: Recipe) {
    console.log('Recipe', recipe);
    const detailsUrl = `/detail/${recipe.id}`;
    this.router.navigate([detailsUrl]);
  }
}
