import { ReducerCreators } from '@reduxjs/toolkit';

import { trpcClient } from '../../services/trpc';
import { type IRecipeStore, type TRecipes } from '../../types/globalTypes';

export const getRecipesAsynkThunk = (creator: ReducerCreators<IRecipeStore>) =>
  creator.asyncThunk(
    async (_, { rejectWithValue }) => {
      try {
        const recipes = await trpcClient.recipes.getRecipes.query();
        return recipes;
      } catch (error) {
        return rejectWithValue((error as Error).message);
      }
    },
    {
      pending: (state) => {
        state.error = null;
        state.loading = true;
      },
      rejected: (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      },
      fulfilled: (state, { payload }) => {
        state.loading = false;
        state.recipes = payload as TRecipes;
      },
    }
  );
