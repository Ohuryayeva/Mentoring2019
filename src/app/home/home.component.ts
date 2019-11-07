import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {RecipeComponent} from '../recipe/recipe.component';
import {Recipe} from '../interface'
import {RecipeService} from "../recipe/recipe.service";
import {ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {RecipeEditComponent} from "../recipe/recipe-edit/recipe-edit.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  recipe: Recipe;
  recipeList: object [];
  constructor(private recipeService: RecipeService, private cfr: ComponentFactoryResolver) { }
  ngOnInit() {
  }
  addRecipe(){
    //this.recipeService.addRecipe();
    let recipeEditComponent = this.cfr.resolveComponentFactory(RecipeEditComponent);
    this.target.createComponent(recipeEditComponent);
  }
}
