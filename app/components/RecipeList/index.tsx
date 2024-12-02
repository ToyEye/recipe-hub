import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "@remix-run/react";
import { FC } from "react";

import { TRecipes } from "~/types/globalTypes";

export const RecipeList: FC<{ recipes: TRecipes }> = ({ recipes }) => {
  const truncateText = (text: string, lineLimit: number) => {
    const words = text.split(" ");
    let truncatedText = "";

    for (let i = 0; i < words.length; i++) {
      truncatedText += words[i] + " ";
      if (truncatedText.split("\n").length > lineLimit) {
        return truncatedText.trim() + "...";
      }
    }
    return text;
  };
  return (
    <List className="grid grid-cols-1 gap-6 md:gap-6 md:grid-cols-3">
      {recipes.map(({ id, img, name, description }) => (
        <ListItem
          key={id}
          className="max-w-80 mx-auto overflow-hidden rounded-lg md:max-w-max hover:scale-105 transition-all duration-500 ease-custom-ease  "
        >
          <Link to={`/recipes/${id}`}>
            <Card>
              <CardMedia
                component="img"
                image={
                  `https://res.cloudinary.com/dglfc2nto/image/upload/v1714638459/recipes${img}` ||
                  ""
                }
              />
              <CardContent className="flex flex-col gap-2 h-[136px] border border-graphite rounded-b-lg border-t-0 p-2">
                <Typography component="h1" className="font-bold ">
                  {name}
                </Typography>
                <Typography component="p">
                  {truncateText(description, 3)}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
