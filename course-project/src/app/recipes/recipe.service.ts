import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { recipesMockData } from './recipes.mock-data';

@Injectable() // INJECT SERVICE TO A SERVICE (WE NEED TO ACCESS THE SHOPPING LIST SERVICE)
export class RecipeService {
  constructor(private slService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();
  // CANT DIRECTLY ACCESS THIS ARRAY FROM THE OUTSIDE
  private recipes: Recipe[] = recipesMockData;

  getRecipes() {
    return this.recipes.slice(); // WILL RETURN A NEW ARRAY(COPY) SO  WE CANT ACCESS!
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipes: Recipe) {
    this.recipes[index] = newRecipes;
  }
}
