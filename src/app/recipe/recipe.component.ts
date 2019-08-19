import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  constructor() { }
  pizza:Recipe;
  static create(event: Recipe) {
    return {
      name: event.name,
      ingredients: event.ingredients
    };
  }

  ngOnInit() {
    this.pizza = RecipeComponent.create({
	  name: 'Pizza',
	  ingredients: ['Ham','Cheese','Bread']
    })
    console.log('pizza1', this.pizza);
  }
  addIngredient (){
    let ingr = (<HTMLInputElement>document.getElementById("ingredient")).value;
    this.pizza.ingredients.push(ingr);
    (<HTMLInputElement>document.getElementById("ingredient")).value = ''
    console.log('Add ingredient');
  }

}
