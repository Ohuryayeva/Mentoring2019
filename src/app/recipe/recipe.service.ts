import { Recipe } from '../interface';
import { Recipes } from './mock-recipe';
import { Observable, of , Subject} from 'rxjs';

export class RecipeService {

  constructor() { }
  private subject = new Subject<any>();
  getRecipes(): Observable <Recipe []> {
    return of(Recipes);
  }
  getRecipe(id: number) {
    return Recipes.find(function (recipe) {
      return recipe.id === id;
    });
  }
  applyFilter(text: string){
    return Recipes.find(function (recipe) {
      return recipe.name.includes(text);
    });
  }
}
