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

export type Recipe = z.infer<typeof RecipeSchema>;

export const RecipesSchema = z.object({
  recipes: z.array(RecipeSchema),
});

export type Recipes = z.infer<typeof RecipesSchema>;
