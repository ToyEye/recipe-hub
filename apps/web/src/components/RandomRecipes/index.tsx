import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';

import { trpcClient } from '../../services/trpc';
import { TRecipes } from '../../types/globalTypes';
import { RecipeList } from '../RecipeList';
import styles from './RandomRecipes.module.scss';

export const RandomRecipes = () => {
  const [recipes, setRecipes] = useState<TRecipes | null>(null);

  useEffect(() => {
    const getRandomRecipes = async () => {
      try {
        const { recipes } = await trpcClient.recipes.getRandomRecipes.query();
        setRecipes(recipes);
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    getRandomRecipes();
  }, []);

  return (
    <Box component="section" className={styles.section}>
      <Container>{recipes && <RecipeList recipes={recipes} />}</Container>
    </Box>
  );
};
