import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <Box component="section" className={styles.section}>
      <Container>
        <Typography component="h1" className={styles.title}>
          Delicious Recipes for Every Day
        </Typography>
        <Typography component="h2" className={styles.subTitle}>
          Find the perfect recipe for any occasion
        </Typography>
        <Link to={routes.RECIPES} className={styles.link}>
          Go to Recipes
        </Link>
      </Container>
    </Box>
  );
};
