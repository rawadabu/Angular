import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { recipesMockData } from './recipes.mock-data';
import { Subject } from 'rxjs';

@Injectable() // INJECT SERVICE TO A SERVICE (WE NEED TO ACCESS THE SHOPPING LIST SERVICE)
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>(); // CAN EMIT OUR INGREDIENT ARRAY

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
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipes: Recipe) {
    this.recipes[index] = newRecipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
