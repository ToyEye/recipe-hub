import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { routes } from '../routes';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const Recipes = lazy(() => import('../pages/Recipes/Recipes'));

export const createRoutes = (): RouteObject[] => [
  {
    path: routes.HOME,
    element: <Layout />,
    children: [
      { path: routes.HOME, element: <Home /> },
      { path: routes.RECIPES, element: <Recipes /> },
      { path: routes.PROFILE, element: <Profile /> },
    ],
  },
];
