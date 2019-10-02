import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService} from "../recipe.service";
import { Recipe } from '../../interface';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.getRecipe();
  }
  getRecipe(): any {
    const id = this.route.snapshot.paramMap.get('id');
    return this.recipeService.getRecipe(parseInt(id, 10));
  }
}
