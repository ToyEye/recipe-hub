import { RecipeRepositoryPort } from '../../domain/repository/user.repository';
import {
  getRecipesRequest,
  GetRecipeUsecase,
} from '../../domain/usecases/gerRecipes.usecase';

export class GetRecipesService implements GetRecipeUsecase {
  constructor(private recipeRepository: RecipeRepositoryPort) {}

  async getRecipes(): Promise<getRecipesRequest> {
    const recipes = await this.recipeRepository.findRecipes();

    return recipes;
  }
}
