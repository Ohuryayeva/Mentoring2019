import { Component, OnInit} from '@angular/core';
import { Observable, of, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {RecipeService} from '../recipe/recipe.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  total: Observable<number> = of(0);
  filtered: Observable<number> = of(0);

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // create observables for total and filtered
  }

  searchActivated() {
    const searchBox = document.getElementById('search-box');
    const input$ = fromEvent(searchBox, 'input').pipe(
      map((e: any) => e.target.value),
      filter(text => text.length > 2),
      debounceTime(100),
      distinctUntilChanged(),
      //switchMap(text => ajax(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`))
      switchMap(text => this.recipeService.applyFilter(text))
    );


    input$.subscribe(data => {
      console.log('Data', data);
      // Handle the data from the API
    });
  }
}
