import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export const recipesMockData: Recipe[] = [
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
