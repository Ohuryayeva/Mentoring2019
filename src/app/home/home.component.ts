import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {RecipeComponent} from '../recipe/recipe.component';
import {Recipe} from '../interface'
import {RecipeService} from "../recipe/recipe.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipe: Recipe;
  recipeList: object [];
  constructor(private recipeService: RecipeService) { }
  ngOnInit() {
  }
  addRecipe(){
    this.recipeService.addRecipe();
  }
}
