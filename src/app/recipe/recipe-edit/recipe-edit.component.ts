import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm,FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RecipeIngredient, MeasurementUnit, Recipe} from '../../interface';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('formDirective') private formDirective: NgForm;
  reactiveForm: FormGroup;
  recipeIngredients: RecipeIngredient [] = [];
  recipe: Recipe []  = [];
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
    this.recipeIngredients.push({
      title: this.reactiveForm.value.title,
      quantity: this.reactiveForm.value.quantity,
      measurementUnit: this.reactiveForm.value.unit,
    });
    this.clean();
  }
  clean() {
    this.reactiveForm.value.title = '',
    this.reactiveForm.value.quantity = '',
    this.reactiveForm.value.unit = ''
  }

  onSubmit() {
    console.log('reactiveForm' , this.reactiveForm.value);
    let self = this;
    const id = Math.round(Math.random() * 1000)+ new Date().getTime();
    const recipe = Object.create(new class implements Recipe{
      id: number = id;
      ingredients: RecipeIngredient[]= self.recipeIngredients;
      name: string = self.reactiveForm.value.name;
    });
    this.recipeService.addRecipe(recipe);
    this.formDirective.resetForm();
    this.recipe = [];
    this.recipeIngredients = [];
  }
  get name() { return this.reactiveForm.get('name'); }
  get description() { return this.reactiveForm.get('description'); }
  get title() { return this.reactiveForm.get('title'); }
  get unit() { return this.reactiveForm.get('unit'); }
  get quantity() { return this.reactiveForm.get('quantity'); }
}
