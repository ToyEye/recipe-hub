import { ReducerCreators } from "@reduxjs/toolkit";

import { type IRecipeStore, type TRecipes } from "../../types/globalTypes";
import prisma from "~/db.server";

export const getRecipesAsynkThunk = (creator: ReducerCreators<IRecipeStore>) =>
  creator.asyncThunk(
    async (_, { rejectWithValue }) => {
      try {
        const recipes = await prisma.recipe.findMany({});
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
