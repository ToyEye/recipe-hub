import { Box, Container, Typography } from "@mui/material";
import { Link } from "@remix-run/react";

import { routes } from "~/utils/routes";

export const Hero = () => {
  return (
    <Box
      component="section"
      className="flex items-center justify-center w-full mx-auto h-52 bg-center bg-cover text-center md:h-[400px] lg:max-w-[1344px] lg:h-[600px] bg-no-repeat text-off-white bg-mask-gradient"
    >
      <Container className="container">
        <Typography
          component="h1"
          className="font-title text-2xl font-bold leading-[1.6] tracking-wider mb-1 md:tracking-wide md:mb-4 lg:font-extrabold lg:text-4xl"
        >
          Delicious Recipes for Every Day
        </Typography>
        <Typography
          component="h2"
          className="font-title text-xl font-bold mb-1 -tracking-wide md:mb-5 md:tracking-wide lg:mb-5"
        >
          Find the perfect recipe for any occasion
        </Typography>
        <Link
          to={routes.RECIPES}
          className="inline-block text-xl px-3 py-2 border-[1px] border-solid border-cool-gray rounded-lg transition-all duration-350 ease-custom-ease md:px-4 hover:text-cool-gray-400 hover:border-cool-gray-400"
        >
          Go to Recipes
        </Link>
      </Container>
    </Box>
  );
};
