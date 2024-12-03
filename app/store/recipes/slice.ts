import { createSlice } from "@reduxjs/toolkit";

import { type IRecipeStore } from "../../types/globalTypes";

const initialState: IRecipeStore = {
  recipes: null,
  error: null,
  loading: false,
  currentPage: 1,
  totalPages: 1,
  totalRecipes: 1,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipes: (state, { payload }) => {
      state.recipes = payload.recipes;
      state.currentPage = payload.currentPage;
      state.totalPages = payload.totalPages;
      state.totalRecipes = payload.totalRecipes;
    },
  },
  selectors: {
    selectRecipes: (state) => state.recipes,
    selectRecipeState: (state) => state,
  },
});

export const recipesReducer = recipeSlice.reducer;

export const { getRecipes } = recipeSlice.actions;
export const { selectRecipes, selectRecipeState } = recipeSlice.selectors;
