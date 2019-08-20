import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {RecipeComponent} from '../recipe/recipe.component';
import {DialogDemoComponent} from '../dialog-demo/dialog-demo.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    let dialogRef = this.dialog.open(DialogDemoComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
    });
  }

}
