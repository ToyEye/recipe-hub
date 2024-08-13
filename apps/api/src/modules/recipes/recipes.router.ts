import { publicProcedure, router } from '../../trpc/trpc';
import { getRecipesSchema } from './domain/usecases/gerRecipes.usecase';
import { createGetRecipesUsucase } from './service/getRecipes/getRecipes.factory';

export const recipesRouter = router({
  getRecipe: publicProcedure.query(async () => {
    return [
      {
        description: '',
        id: '',
        img: '',
        name: '',
        ingredients: [''],
        instructions: [''],
        vote_average: 0,
      },
    ];
  }),
  getRecipes: publicProcedure
    .output(getRecipesSchema)
    .query(async ({ input, ctx }) => {
      const usecase = createGetRecipesUsucase(ctx.db);
      console.log(ctx.db);
      const recipes = usecase.getRecipes();

      return recipes;
    }),
});
