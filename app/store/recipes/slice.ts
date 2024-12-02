import { createSlice } from "@reduxjs/toolkit";

import { type IRecipeStore } from "../../types/globalTypes";

const initialState: IRecipeStore = {
  recipes: null,
  error: null,
  loading: false,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipes: (state, { payload }) => {
      state.recipes = payload;
    },
  },
  selectors: {
    selectRecipes: (state) => state,
  },
});

export const recipesReducer = recipeSlice.reducer;

export const { getRecipes } = recipeSlice.actions;
export const { selectRecipes } = recipeSlice.selectors;
