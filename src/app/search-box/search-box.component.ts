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
  filtered: Observable<number> = of(0);

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // create observables for total and filtered
  }

  searchActivated() {
    const searchBoxValue = document.getElementById('search-box').value;
    let searchRecipes;
    if(searchBoxValue.length > 2){
     this.recipeService.applyFilter(searchBoxValue);
    } else {
     this.recipeService.loadRecipes();
    }
  }
}
