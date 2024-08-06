import { publicProcedure, router } from '../../trpc/trpc';

export const recipesRouter = router({
  getRecipes: publicProcedure.query(async () => {
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
});
