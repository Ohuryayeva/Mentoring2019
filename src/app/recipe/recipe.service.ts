import { Recipe } from '../interface';
import { HttpClient } from '@angular/common/http';
import { Recipes } from './mock-recipe';
import { Observable, of , Subject} from 'rxjs';
import {map} from 'rxjs/operators';

export class RecipeService {

  constructor(private httpClient: HttpClient) { }
  private subject = new Subject <Recipe []> ();
  private recipes: Recipe[];
  private search: string;

  getRecipes(): Observable <Recipe []> {
    return this.subject.asObservable();
  }
  getFilteredRecipes(): Observable <Recipe []> {
    return this.subject.asObservable().pipe(
      map(recipes => recipes.filter(recipe => recipe.name.includes(this.search))
    ));
  }
  getRecipe(id: number) {
    return this.recipes.find(recipe => recipe.id === id);
  }
  removeRecipe(id: number) {
    this.recipes = this.recipes.filter(function (recipe) {
      return recipe.id !== id;
    });
    this.subject.next(this.recipes);
  }
  addRecipe(){
    const id = Math.round(Math.random() * 1000);
      this.recipes.push(new class implements Recipe {
        id: number = id;
        ingredients = [];
        name: string = 'New recipe number ' + id;
      });
      this.subject.next(this.recipes);
  }
  applyFilter(text: string) {
    const recipes = this.recipes.filter(function (recipe) {
      return recipe.name.includes(text);
    });
    this.search = text;
    this.subject.next(recipes);
  }
  loadRecipes() {
    let testRecipe = this.initialize();
    this.subject.next(this.recipes);
  }
  initialize(): Observable <Object> {
    return this.httpClient.get('https://api.myjson.com/bins/s3cqk');
  }
  // getTotalCount() {
  //   return this.subjectTotal.asObservable().pipe(map(r => r.length));
  // }
  getFilteredCount() {
    return this.subject.asObservable().pipe(map(r => r.length));
  }
}
