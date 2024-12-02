import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

import { TRecipes } from "~/types/globalTypes";

import { RecipeList } from "../RecipeList";

export const RandomRecipes: FC<{ recipes: TRecipes }> = ({ recipes }) => {
  return (
    <Box component="section" className="py-8 md:py-16">
      <Container className="container mx-auto">
        <Typography
          component="h2"
          className="font-bold mb-3 text-3xl text-center tracking-wide md:text-4xl md:mb-4"
        >
          Random Recipes
        </Typography>
        {recipes && <RecipeList recipes={recipes} />}
      </Container>
    </Box>
  );
};
