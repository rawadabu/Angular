import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable() // INJECT SERVICE TO A SERVICE (WE NEED TO ACCESS THE SHOPPING LIST SERVICE)
export class RecipeService {
  constructor(private slService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();
  // CANT DIRECTLY ACCESS THIS ARRAY FROM THE OUTSIDE
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.foodandwine.com/thmb/ppDgfqJYhMeDAxtArwoYEssEMkI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
      [new Ingredient('Noodles', 1), new Ingredient('Tomatoes', 1)]
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.foodandwine.com/thmb/ppDgfqJYhMeDAxtArwoYEssEMkI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
      [new Ingredient('Noodles', 1), new Ingredient('Tomatoes', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); // WILL RETURN A NEW ARRAY(COPY) SO  WE CANT ACCESS!
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
