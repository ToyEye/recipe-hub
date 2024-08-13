import { z } from 'zod';

export const RecipeSchema = z.object({
  id: z.number(),
  name: z.string().nullable(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  country: z.string(),
  description: z.string(),
  img: z.string().nullable(),
});

export const getRecipesSchema = z.object({
  recipes: z.array(RecipeSchema),
});

export type getRecipesRequest = z.infer<typeof getRecipesSchema>;

export interface GetRecipeUsecase {
  getRecipes(): Promise<getRecipesRequest>;
}
