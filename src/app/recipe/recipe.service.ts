import { Injectable } from '@angular/core';
import { Recipe } from '../interface';
import { Recipes } from './mock-recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
  getRecipes(): Recipe []{
    return Recipes;
  }
}
