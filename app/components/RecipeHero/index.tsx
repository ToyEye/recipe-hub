import { Box, CardMedia, Typography } from "@mui/material";

import heroImage from "/img/recipes.avif";

export const RecipeHero = () => {
  return (
    <Box component="section" className="bg-gray-100 py-12  md:py-24 h-full">
      <Box component="div" className="container mx-auto">
        <Typography
          component="h1"
          className="text-4xl font-bold mb-4 md:text-5xl"
        >
          Welcome to Recipe Collection
        </Typography>

        <Typography component="p" className="text-gray-600 mb-3 md:text-xl">
          Discover a world of delicious recipes from around the globe.
        </Typography>

        <CardMedia
          component="img"
          image={heroImage}
          alt="recipe book"
          className="mb-4 lg:mb-8"
        />
      </Box>
    </Box>
  );
};
