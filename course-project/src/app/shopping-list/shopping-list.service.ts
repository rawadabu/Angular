import { Ingredient } from '../shared/ingredient.model';
import { shoppinglistMockData } from './shopping-list.mock-data';

import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>(); // CAN EMIT OUR INGREDIENT ARRAY
  private ingredients: Ingredient[] = shoppinglistMockData;
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
