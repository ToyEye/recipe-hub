import CommentIcon from '@mui/icons-material/Comment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import { useEffect } from 'react';

import statsCommentsImg from '/img/statComments.webp';
import statsRecipesImg from '/img/statRecipe.webp';
import statsUserImg from '/img/statUsers.webp';

import { trpcClient } from '../../services/trpc';
import styles from './Statictics.module.scss';

const imgArray = [
  {
    id: 1,
    aria: 'Recipe Image',
    img: statsRecipesImg,
    icon: <MenuBookIcon />,
    description:
      'Here you can find more than 50 recipes from different countries of the world. Add. Discuss. Cook.',
  },
  {
    id: 2,
    aria: 'User Image',
    img: statsUserImg,
    icon: <PeopleAltIcon />,
    description:
      'We already have 500 registered users who are already preparing together',
  },
  {
    id: 3,
    aria: 'Comments Image',
    img: statsCommentsImg,
    icon: <CommentIcon />,
    description: '1020 comments written by our users',
  },
];

export const Statictics = () => {
  const statsArray = [
    { id: 1, title: 'Recipes', count: 50 },
    { id: 2, title: 'Users', count: 30 },
    { id: 3, title: 'Comments', count: 100 },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await trpcClient.recipes.getRandomRecipes.query();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Box component="section" className={styles.section}>
      <Container>
        <Typography component="h2" className={styles.title}>
          Hub Statistics
        </Typography>
        <List className={styles.list}>
          {statsArray.map(({ id, count, title }, idx) => (
            <ListItem key={id} className={styles.item}>
              <Box component="div" className={styles.optionThumb}>
                <Box component="div" className={styles.imgWrapper}>
                  <img
                    src={imgArray[idx].img}
                    alt={imgArray[idx].aria}
                    aria-label={imgArray[idx].aria}
                  />
                </Box>

                <Box component="div" className={styles.optionContent}>
                  {imgArray[idx].description}
                </Box>
              </Box>

              <Box component="div" className={styles.aboutWrapper}>
                <Typography component="h3" className={styles.subTitle}>
                  {title} in the hub
                </Typography>
                <Typography component="p" className={styles.info}>
                  {imgArray[idx].icon}
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
