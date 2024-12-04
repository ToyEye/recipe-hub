import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

import { useAppSelector } from "~/hooks/useRedux";
import { selectRecipeState } from "~/store/recipes/slice";
import { TRecipes } from "~/types/globalTypes";

import { RecipeList } from "../RecipeList";
import { RecipePagination } from "../RecipePagination";

export const RecipesCollection: FC<{ recipes: TRecipes }> = ({ recipes }) => {
  // const recipes = useAppSelector(selectRecipes);
  const { currentPage, totalPages } = useAppSelector(selectRecipeState);

  return (
    <Box component="section" className="py-10 md:py-16">
      <Container className="container mx-auto">
        <Typography
          component="h2"
          className="font-bold mb-3 text-3xl text-center tracking-wide md:text-5xl md:mb-4"
        >
          Recipe Collection
        </Typography>
        {recipes && <RecipeList recipes={recipes} />}
        <RecipePagination currentPage={currentPage} totalPages={totalPages} />
      </Container>
    </Box>
  );
};
