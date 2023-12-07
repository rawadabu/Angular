import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // TO GET ANY DATA FROM OUTSIDE, WE NEED A DECORATOR INPUT (ALLOW US TO BIND THIS COMPONENT PROPERRTY FROM OUTSIDE)

  constructor(private recipeServer: RecipeService) {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeServer.recipeSelected.emit(this.recipe);
  }
}
