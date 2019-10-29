import { Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from "../interface";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  recipes: Recipe[];
  total: Observable<number> = of(0);
  filtered: any;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.filtered = this.getRecipesCount();
    // create observables for total and filtered
  }
  searchActivated() {
    const searchBoxValue = document.getElementById('search-box').value;
    if(searchBoxValue.length > 2){
     this.recipeService.applyFilter(searchBoxValue);
    } else {
     this.recipeService.loadRecipes();
    }
  }
  getRecipesCount(): any {
    this.recipeService.getRecipes().
    subscribe(recipes => {
      this.filtered = recipes.length;
      console.log('this.recipes.length', this.filtered);
      return this.filtered;
    });
  }
}
