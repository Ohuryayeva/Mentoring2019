import { Recipe } from '../interface';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

export class RecipeService {

  constructor(private http: HttpClient) {
    this.initialize();
  }
  private recipes: Recipe[] = [];
  private subject = new BehaviorSubject <Recipe []> (this.recipes);
  private search = '';

  getRecipes(): Observable <Recipe []> {
    return this.subject.asObservable();
  }
  getFilteredRecipes(): Observable <Recipe []> {
    return this.subject.asObservable().pipe(
      map(recipes => recipes.filter(recipe => recipe.name.includes(this.search))
    ));
  }
  getRecipe(id: number) {
    return this.recipes.find(recipe => recipe.id == id);
  }

  removeRecipe(id: number) {
    this.recipes = this.recipes.filter(function (recipe) {
      return recipe.id !== id;
    });
    this.subject.next(this.recipes);
  }
  addRecipe() {
    const id = Math.round(Math.random() * 1000);
      this.recipes.push(new class implements Recipe {
        id: number = id;
        ingredients = [];
        name: string = 'New recipe number ' + id;
      });
      this.subject.next(this.recipes);
  }
  applyFilter(text: string) {
    this.search = text;
    this.subject.next(this.recipes);
  }

  async initialize() {
    this.recipes = await this.http.get<Recipe []>('https://api.myjson.com/bins/vfup8').toPromise();
    this.subject.next(this.recipes);
  }
}
