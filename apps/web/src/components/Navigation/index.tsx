import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, IconButton, List, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../routes';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsOpenMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 768px)');

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsOpenMobileMenu(false);
      }
    };

    mediaQueryList.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    };
  }, [setIsOpenMobileMenu]);

  const handleCloseMenuCose = () => {
    if (window.innerWidth <= 767) {
      setIsOpenMobileMenu(false);
    }
  };

  return (
    <Box component="header" className={styles.header}>
      <Container>
        <Box component="nav" className={styles.nav}>
          <NavLink to={routes.HOME} className={`${styles.link} ${styles.logo}`}>
            Recipe Collection
          </NavLink>
          <IconButton
            aria-label="menu"
            onClick={toggleMobileMenu}
            className={styles.menuBtn}
          >
            {isOpenMobileMenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          {/* <IconButton>
            <CloseIcon />
          </IconButton> */}
          <Box
            component="div"
            className={`${styles.listWrapper} ${
              isOpenMobileMenu && styles.open
            }`}
          >
            <List className={styles.list}>
              {Object.values(routes).map((link) => (
                <ListItem key={link}>
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      isActive ? styles.active + ' ' + styles.link : styles.link
                    }
                    onClick={handleCloseMenuCose}
                  >
                    {link === '/' ? 'home' : link.slice(1)}
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
