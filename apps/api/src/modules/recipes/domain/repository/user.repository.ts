import { Recipes } from '../entities/recipe.entity';

export type getAllRecipeResult = Recipes;

export interface RecipeRepositoryPort {
  findRecipes(): Promise<getAllRecipeResult>;
}
