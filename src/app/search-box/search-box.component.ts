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
  searchString: string;
  total: Observable<Recipe[]> = this.recipeService.getRecipes();
  filtered: Observable<number> = this.recipeService.getFilteredCount();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // create observables for total and filtered
  }
  searchActivated(searchBoxValue: string) {
    if (searchBoxValue.length > 2) {
     this.recipeService.applyFilter(searchBoxValue);
    } else {
     this.recipeService.loadRecipes();
    }
  }
}
