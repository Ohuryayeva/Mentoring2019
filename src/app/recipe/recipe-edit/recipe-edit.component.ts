import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeIngredient } from '../../interface';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  reactiveForm: FormGroup;
  recipeIngredient: RecipeIngredient;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [ Validators.required]],
      description: ['',  [Validators.required,Validators.minLength(6)]]
    });
  }
  addIngredient() {
  }

  onSubmit() {
    console.log('reactiveForm' , this.reactiveForm.value);
  }
  get name() { return this.reactiveForm.get('name'); }
  get description() { return this.reactiveForm.get('description'); }
}
