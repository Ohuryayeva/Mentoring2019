import { Component, OnInit} from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {RecipeService} from "../recipe/recipe.service";
import {text} from "@angular/core/src/render3/instructions";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  searchActivated() {
    const searchBox = document.getElementById('search-box');
    const input$ = fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => e.target.value),
      filter(text => text.length > 2),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap(() => ajax(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`))
    );
    input$.subscribe(data => {
      console.log('Data', data)
      // Handle the data from the API
    });
  }
}
