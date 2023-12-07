import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); // LISTEN FROM OUTSIDE

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.foodandwine.com/thmb/ppDgfqJYhMeDAxtArwoYEssEMkI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.foodandwine.com/thmb/ppDgfqJYhMeDAxtArwoYEssEMkI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {}
  ngOnInit(): void {}
}
