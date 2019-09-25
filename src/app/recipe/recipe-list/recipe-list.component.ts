import { Recipe } from './../../interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
    this.recipes = [
      {name: 'Baked Chicken Schnitzel', ingredients: []},
      {name: 'Baked Chicken Schnitzel', ingredients: []},
      {name: 'Baked Chicken Schnitzel', ingredients: []},
      {name: 'The Super Sandwich', ingredients: [],
        imageUrl: 'http://2.bp.blogspot.com/-iXxJIkGg2Tk/UH4D_eIzKlI/AAAAAAAAAK8/Fbb5CyxaW_8/s1600/super+sandwich.jpg'}
    ];
  }

  onRecipeClicked(recipe: Recipe) {
    // redirect to recipe details
  }
}
