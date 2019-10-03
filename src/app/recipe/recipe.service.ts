import { Recipe } from '../interface';
import { Recipes } from './mock-recipe';

export class RecipeService {

  constructor() { }
  getRecipes(): Recipe [] {
    return Recipes;
  }
  getRecipe(id: number) {
    return Recipes.find(function (recipe) {
      return recipe.id === id;
    });
  }
}
