import { Box, Container, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { routes } from '../../routes';

export const Navigation = () => {
  return (
    <Box component="header">
      <Container>
        <Box component="nav">
          <NavLink to={routes.HOME}>Recipe Collection</NavLink>
          <List>
            {Object.values(routes)
              .filter((link) => link !== '/')
              .map((link) => (
                <ListItem key={link}>
                  <NavLink to={link}>{link.slice(1)} </NavLink>
                </ListItem>
              ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
};
