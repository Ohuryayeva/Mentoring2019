import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {Recipe} from './recipe'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {
  recipe: Recipe;
  constructor(public thisDialogRef: MatDialogRef<RecipeComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  static create(event: Recipe) {
    return {
      name: event.name,
      ingredients: event.ingredients
    };
  }
  ngOnInit() {
	this.recipe = RecipeComponent.create({
		name: '',
		ingredients: [],
	});
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
  addIngredient (){
    let ingr = (<HTMLInputElement>document.getElementById("ingredient")).value;
    this.recipe.ingredients.push(ingr);
    (<HTMLInputElement>document.getElementById("ingredient")).value = ''
    console.log('Add ingredient');
  }
}
