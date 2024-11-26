import { Box, Container, IconButton, List, ListItem } from "@mui/material";
import { NavLink } from "@remix-run/react";
import { lazy, Suspense, useEffect, useState } from "react";

import { routes } from "~/utils/routes";

const CloseIcon = lazy(() => import("@mui/icons-material/Close"));
const MenuIcon = lazy(() => import("@mui/icons-material/Menu"));

export const Navigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsOpenMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia("(min-width: 768px)");

      const handleMediaQueryChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          setIsOpenMobileMenu(false);
        }
      };

      mediaQueryList.addEventListener("change", handleMediaQueryChange);

      return () => {
        mediaQueryList.removeEventListener("change", handleMediaQueryChange);
      };
    }
  }, [setIsOpenMobileMenu]);

  const handleCloseMenuCose = () => {
    if (window.innerWidth <= 767 && typeof window !== "undefined") {
      setIsOpenMobileMenu(false);
    }
  };

  return (
    <Box component="header" className="bg-dark-navy">
      <Container className="container mx-auto">
        <Box
          component="nav"
          className="relative flex justify-between items-center"
        >
          <NavLink
            to={routes.HOME}
            className="text-3xl block text-off-white py-2  "
          >
            Recipe Collection
          </NavLink>

          <Suspense>
            <IconButton
              aria-label="menu"
              onClick={toggleMobileMenu}
              className="fill-white w-8 z-10 md:hidden"
            >
              {isOpenMobileMenu ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Suspense>
          <Box
            component="div"
            className={`fixed top-0 right-0 flex items-center justify-center bg-dark-navy w-1/2 h-full border border-solid border-cool-gray rounded-lg scale-0 translate-x-[110%] transition-all duration-350 ease-custom-ease ${
              isOpenMobileMenu && "!scale-100 !translate-x-0"
            } md:relative md:scale-100  md:translate-x-0 md:bg-transparent border-none`}
          >
            <List className="flex flex-col items-center gap-5 capitalize md:flex-row">
              {Object.values(routes).map((link) => (
                <ListItem key={link}>
                  <NavLink
                    to={link}
                    onClick={handleCloseMenuCose}
                    className={({ isActive }) =>
                      `block text-off-white py-2 transition-all duration-350 ease-custom-ease hover:text-slate-blue focus:text-slate-blue ${
                        isActive && `scale-125 text-slate-blue`
                      }`
                    }
                  >
                    {link === "/" ? "home" : link.slice(1)}
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
