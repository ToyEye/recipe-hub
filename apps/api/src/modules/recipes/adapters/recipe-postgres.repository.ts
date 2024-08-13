import { PrismaClient } from '@prisma/client';

import {
  getAllRecipeResult,
  RecipeRepositoryPort,
} from '../domain/repository/user.repository';

export class RecipePostgresRepository implements RecipeRepositoryPort {
  constructor(private prisma: PrismaClient) {}

  async findRecipes(): Promise<getAllRecipeResult> {
    const recipes = await this.prisma.recipe.findMany({});

    if (!recipes) return null;

    return { recipes };
  }
}
