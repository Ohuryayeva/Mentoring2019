import { Recipe } from '../interface';
import { Recipes } from './mock-recipe';
import { Observable, of , Subject} from 'rxjs';
import {map} from 'rxjs/operators';

export class RecipeService {

  constructor() { }
  private subject = new Subject <Recipe []> ();
  private recipes: Recipe[] = Recipes;

  getRecipes(): Observable <Recipe []> {
    setInterval(() => {
      const id = Math.round(Math.random() * 1000);
      this.recipes.push(new class implements Recipe {
        id: number = id;
        ingredients = [];
        name: string = 'New ' + id;
      });
      this.subject.next(this.recipes);
      // console.log(this.recipes);
    }, 2000);
    return this.subject.asObservable();
  }
  getRecipe(id: number) {
    return this.recipes.find(function (recipe) {
      return recipe.id === id;
    });
  }
  removeRecipe(id: number) {
    this.recipes = this.recipes.filter(function (recipe) {
      return recipe.id !== id;
    });
    this.subject.next(this.recipes);
  }
  applyFilter(text: string) {
    const recipes = this.recipes.filter(function (recipe) {
      return recipe.name.includes(text);
    });
    this.subject.next(recipes);
  }
  loadRecipes() {
    this.subject.next(this.recipes);
  }
  getTotalCount() {
    return of(this.recipes).pipe(map(r => r.length));
  }
  getFilteredCount() {
    return this.subject.asObservable().pipe(map(r => r.length));
  }
}
