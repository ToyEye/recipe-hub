import { PrismaClient } from '@prisma/client';

import { RecipePostgresRepository } from '../../adapters/recipe-postgres.repository';
import { GetRecipeUsecase } from '../../domain/usecases/gerRecipes.usecase';
import { GetRecipesService } from './getRecipes.service';

export const createGetRecipesUsucase = (db: PrismaClient): GetRecipeUsecase => {
  const recipesRepository = new RecipePostgresRepository(db);

  return new GetRecipesService(recipesRepository);
};
