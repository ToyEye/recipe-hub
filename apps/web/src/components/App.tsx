import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { createRoutes } from './Routes';

const routes = createRoutes();
const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <RouterProvider
      router={router}
      //   fallbackElement={<AppLoader />}
      future={{ v7_startTransition: true }}
    />
  );
};
