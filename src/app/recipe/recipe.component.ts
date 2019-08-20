import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  constructor() { }
  static create(event: Recipe) {
    return {
      name: event.name,
      ingredients: event.ingredients
    };
  }
  ngOnInit() {
  }

}
