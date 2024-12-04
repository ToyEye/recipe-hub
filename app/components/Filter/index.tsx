import { Box, Container, Typography } from "@mui/material";
import { Form, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";

import { useAppSelector } from "~/hooks/useRedux";
import { selectCountries } from "~/store/countries/slice";

export const Filter = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState("");

  const countries = useAppSelector(selectCountries);
  const location = useLocation();

  const handleChange = () => {
    const form = document.getElementById(
      "filter-form"
    ) as HTMLFormElement | null;
    form?.submit();
  };

  useEffect(() => {
    const url = location.search;
    const searchParams = new URLSearchParams(url);

    const countryValue = searchParams.get("country");
    const selectedRecipe = searchParams.get("search");

    if (countryValue) setSelectedCountry(countryValue);
    if (selectedRecipe) setSelectedRecipe(selectedRecipe);
  }, [location.search]);

  return (
    <Box component="section" className="py-5">
      <Container className="container mx-auto">
        <Typography
          component="h2"
          className="font-bold mb-3 text-3xl text-center tracking-wide md:text-5xl md:mb-4"
        >
          Search recipes
        </Typography>

        <Form method="get" id="filter-form" className="flex justify-between">
          <input type="hidden" name="page" value="1" />
          <div className="flex flex-col">
            <label htmlFor="country" className="mb-3">
              Select Country:
            </label>

            <select
              name="country"
              id="country"
              defaultValue=""
              value={selectedCountry}
              onChange={handleChange}
              className="py-1 px-2 rounded-md"
            >
              <option value="">All Countries</option>
              {countries.map(({ id, country }) => (
                <option value={country} key={id}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end gap-6">
            <div className="flex flex-col">
              <label htmlFor="search" className="mb-3">
                Search by Recipe Name:
              </label>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search recipe"
                className="py-1 px-3 "
                defaultValue={selectedRecipe}
              />
            </div>
            <button className="relative flex items-center px-6 py-1 overflow-hidden font-medium transition-all bg-[#3f4349] rounded-md group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3f4574] rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3f4574] rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#3f4574] rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Search
              </span>
            </button>
          </div>
        </Form>
      </Container>
    </Box>
  );
};
