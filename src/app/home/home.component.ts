import { Component, OnInit } from '@angular/core';
import {Recipe} from '../interface';
import {RecipeService} from '../recipe/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipe: Recipe;
  showEdit: boolean;
  constructor(private recipeService: RecipeService) { }
  ngOnInit() {
  }
}
