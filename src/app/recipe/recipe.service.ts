import { Recipe } from '../interface';
import { Recipes } from './mock-recipe';
import { Observable, of , Subject} from 'rxjs';

export class RecipeService {

  constructor() { }
  private subject = new Subject <Recipe []> ();

  getRecipes(): Observable <Recipe []> {
    return this.subject.asObservable();
  }
  getRecipe(id: number) {
    return Recipes.find(function (recipe) {
      return recipe.id === id;
    });
  }
  applyFilter(text: string){
    let recipes = Recipes.filter(function (recipe) {
      return recipe.name.includes(text);
    });
    this.subject.next(recipes);
  }
  loadRecipes(){
    this.subject.next(Recipes)
  }
}
