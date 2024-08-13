import { Recipe, Recipes } from '../entities/user.entity';

export type getAllRecipeResult = Recipes;

export interface RecipeRepositoryPort {
  findRecipes(): Promise<getAllRecipeResult>;
}
