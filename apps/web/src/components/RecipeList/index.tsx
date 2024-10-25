import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { TRecipes } from '../../types/globalTypes';
import styles from './RecipeList.module.scss';

export const RecipeList: FC<{ recipes: TRecipes }> = ({ recipes }) => {
  const truncateText = (text: string, lineLimit: number) => {
    const words = text.split(' ');
    let truncatedText = '';

    for (let i = 0; i < words.length; i++) {
      truncatedText += words[i] + ' ';
      if (truncatedText.split('\n').length > lineLimit) {
        return truncatedText.trim() + '...';
      }
    }
    return text;
  };
  return (
    <List className={styles.list}>
      {recipes.map(({ id, img, name, description }) => (
        <ListItem key={id} className={styles.item}>
          <Link to={`/recipes/${id}`}>
            <Card>
              <CardMedia
                component="img"
                image={
                  `https://res.cloudinary.com/dglfc2nto/image/upload/v1714638459/recipes${img}` ||
                  ''
                }
              />
              <CardContent className={styles.description}>
                <Typography component="h1">{name}</Typography>
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
