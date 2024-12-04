import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: { countries: [] },
  reducers: {
    getCountries: (state, { payload }) => {
      state.countries = payload;
    },
  },
  selectors: {
    selectCountries: (state) => state.countries,
  },
});

export const countriesReducer = countriesSlice.reducer;
export const { selectCountries } = countriesSlice.selectors;
export const { getCountries } = countriesSlice.actions;
