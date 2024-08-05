import { publicProcedure, router } from '../../trpc/trpc';

export const recipesRouter = router({
  getRecipes: publicProcedure.query(async () => {
    return [
      {
        id: 1,
        name: 'Alex',
      },
    ];
  }),
});
