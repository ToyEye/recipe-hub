import { recipesRouter } from '../modules/recipes/recipes.router';
import { router } from './trpc';

export const appRouter = router({ recipes: recipesRouter });

export type AppRouter = typeof appRouter;
