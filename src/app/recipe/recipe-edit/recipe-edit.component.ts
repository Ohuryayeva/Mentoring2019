import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RecipeIngredient, MeasurementUnit, Recipe} from '../../interface';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  @Input() recipe: Recipe;

  reactiveForm: FormGroup;
  recipeIngredient: RecipeIngredient;
  measurementUnits: string[] = Object.keys(MeasurementUnit).filter(k => typeof MeasurementUnit[k as any] === 'number');

  constructor(private fb: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [ Validators.required]],
      description: ['',  [Validators.required, Validators.minLength(6)]],
      title: ['',  [Validators.required]],
      unit: [this.measurementUnits[0]],
      quantity: ['',[ Validators.required]],
    });
  }
  addIngredient() {
    this.recipe.ingredients.push({
      title: this.reactiveForm.value.title,
      quantity: this.reactiveForm.value.quantity,
      measurementUnit: this.reactiveForm.value.unit,
    });
  }
  count(arr) {
    let temp = {};
    let counter = 1;
    arr.map((el) => {
      temp[el] = temp[el] ? ++temp[el] : counter;
    });
    return temp;
  }
  onSubmit() {
    console.log('reactiveForm' , this.reactiveForm.value);
    this.recipeService.addRecipe();
  }
  get name() { return this.reactiveForm.get('name'); }
  get description() { return this.reactiveForm.get('description'); }
  get title() { return this.reactiveForm.get('title'); }
  get unit() { return this.reactiveForm.get('unit'); }
  get quantity() { return this.reactiveForm.get('quantity'); }
}
