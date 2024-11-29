import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { lazy, useEffect } from "react";

import statsCommentsImg from "/img/statComments.webp";
import statsRecipesImg from "/img/statRecipe.webp";
import statsUserImg from "/img/statUsers.webp";

// const CommentIcon = lazy(() => import("@mui/icons-material/Comment"));
// const MenuBookIcon = lazy(() => import("@mui/icons-material/MenuBook"));
// const PeopleAltIcon = lazy(() => import("@mui/icons-material/PeopleAlt"));

export const Statistics = () => {
  const imgArray = [
    {
      id: 1,
      aria: "Recipe Image",
      img: statsRecipesImg,
      // icon: <MenuBookIcon />,
      description:
        "Here you can find more than 50 recipes from different countries of the world. Add. Discuss. Cook.",
    },
    {
      id: 2,
      aria: "User Image",
      img: statsUserImg,
      // icon: <PeopleAltIcon />,
      description:
        "We already have 500 registered users who are already preparing together",
    },
    {
      id: 3,
      aria: "Comments Image",
      img: statsCommentsImg,
      // icon: <CommentIcon />,
      description: "1020 comments written by our users",
    },
  ];

  const statsArray = [
    { id: 1, title: "Recipes", count: 50 },
    { id: 2, title: "Users", count: 30 },
    { id: 3, title: "Comments", count: 100 },
  ];

  return (
    <Box component="section" className="py-8 md:py-16">
      <Container className="container mx-auto">
        <Typography
          component="h2"
          className="font-bold mb-3 text-3xl text-center tracking-wide md:text-4xl"
        >
          Hub Statistics
        </Typography>
        <List className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {statsArray.map(({ id, count, title }, idx) => (
            <ListItem
              key={id}
              className="mx-auto overflow-hidden  max-w-80 md:max-w-max"
            >
              <Box component="div" className="relative overflow-hidden group">
                <Box
                  component="div"
                  className="after:content-[''] after:bg-[#24171754] after:h-full after:w-full after:absolute after:top-0"
                >
                  <img
                    src={imgArray[idx].img}
                    alt={imgArray[idx].aria}
                    aria-label={imgArray[idx].aria}
                  />
                </Box>

                <Box
                  component="div"
                  className="absolute top-0 left-0  leading-[2.4] tracking-wider flex justify-center items-center w-full h-full p-[15px] text-off-white bg-overlay-dark -translate-y-full transition-all duration-350 ease-linear group-hover:translate-y-0"
                >
                  {imgArray[idx].description}
                </Box>
              </Box>

              <Box
                component="div"
                className="p-[10px] border border-solid border-graphite border-t-0 rounded-b-lg"
              >
                <Typography component="h3" className="font-bold mb-2">
                  {title} in the hub
                </Typography>
                <Typography component="p" className="flex items-center gap-2">
                  {/* {imgArray[idx].icon} */}
                  {count}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};
