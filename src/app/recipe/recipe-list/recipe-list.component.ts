import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Recipe } from '../../interface';
import { RecipeService} from "../recipe.service";
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<Recipe[]> = this.recipeService.getRecipes();
  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => this.recipeService.loadRecipes(), 100);
  }

  onRecipeClicked(recipe: Recipe) {
    console.log('Recipe', recipe);
    const detailsUrl = `/detail/${recipe.id}`;
    this.router.navigate([detailsUrl]);
  }
}
