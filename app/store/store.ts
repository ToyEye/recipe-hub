import { configureStore } from "@reduxjs/toolkit";

import { countriesReducer } from "./countries/slice";
import { recipesReducer } from "./recipes/slice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
