import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {RecipeComponent} from '../recipe/recipe.component';
import {Recipe} from '../recipe'


@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss']
})
export class DialogDemoComponent implements OnInit {
  recipe: Recipe;
  constructor(public thisDialogRef: MatDialogRef<DialogDemoComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

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
