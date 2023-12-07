import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppinglistMockData } from './shopping-list.mock-data';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>(); // CAN EMIT OUR INGREDIENT ARRAY
  private ingredients: Ingredient[] = shoppinglistMockData;
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
