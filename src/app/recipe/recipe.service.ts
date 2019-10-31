import { Recipe } from '../interface';
import { Recipes } from './mock-recipe';
import { Observable, of , Subject} from 'rxjs';
import {map} from 'rxjs/operators';

export class RecipeService {

  constructor() { }
  private subjectFiltered = new Subject <Recipe []> ();
  private subjectTotal = new Subject <Recipe []> ();
  private recipes: Recipe[] = Recipes;

  getRecipes(): Observable <Recipe []> {
    return this.subjectFiltered.asObservable();
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
    this.subjectFiltered.next(this.recipes);
    this.subjectTotal.next(this.recipes);
  }
  addRecipe(){
    const id = Math.round(Math.random() * 1000);
      this.recipes.push(new class implements Recipe {
        id: number = id;
        ingredients = [];
        name: string = 'New recipe number ' + id;
      });
      this.subjectFiltered.next(this.recipes);
      this.subjectTotal.next(this.recipes);
  }
  applyFilter(text: string) {
    const recipes = this.recipes.filter(function (recipe) {
      return recipe.name.includes(text);
    });
    this.subjectFiltered.next(recipes);
  }
  loadRecipes() {
    this.subjectFiltered.next(this.recipes);
    this.subjectTotal.next(this.recipes);
  }
  getTotalCount() {
    return this.subjectTotal.asObservable().pipe(map(r => r.length));
  }
  getFilteredCount() {
    return this.subjectFiltered.asObservable().pipe(map(r => r.length));
  }
}
