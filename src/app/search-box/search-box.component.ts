import { Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from "../interface";
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  recipes: Recipe[];
  searchString: string;
  total: Observable<number> = this.recipeService.getRecipes().pipe(map(r => r.length));
  filtered: Observable<number> = this.recipeService.getFilteredRecipes().pipe(map(r => r.length));

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // create observables for total and filtered
  }
  searchActivated(searchBoxValue: string) {
     this.recipeService.applyFilter(searchBoxValue);
  }
}
