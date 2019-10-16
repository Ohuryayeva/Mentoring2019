import { Recipe } from '../interface';
import { Recipes } from './mock-recipe';
import { Observable, of } from 'rxjs';

export class RecipeService {

  constructor() { }
  getRecipes(): Observable <Recipe []> {
    return of(Recipes);
  }
  getRecipe(id: number) {
    return Recipes.find(function (recipe) {
      return recipe.id === id;
    });
  }
}
