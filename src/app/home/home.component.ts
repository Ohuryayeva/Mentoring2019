import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {RecipeComponent} from '../recipe/recipe.component';
import {Recipe} from '../interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipe: Recipe;
  recipeList: object [];
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
    this.recipeList = [];
  }
  openDialog() {
    let dialogRef = this.dialog.open(RecipeComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.recipeList.push(result);
      console.log('this.recipeList', this.recipeList);
    });
  }

}
