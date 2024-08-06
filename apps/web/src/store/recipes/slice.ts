import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import { type IRecipeStore } from '../../types/globalTypes';
import { getRecipesAsynkThunk } from './operations';

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState: IRecipeStore = {
  recipes: null,
  error: null,
  loading: false,
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: (creator) => ({ getRecipes: getRecipesAsynkThunk(creator) }),
  selectors: {
    selectRecipes: (state) => state,
  },
});

export const recipesReducer = recipeSlice.reducer;

export const { getRecipes } = recipeSlice.actions;
export const { selectRecipes } = recipeSlice.selectors;
