import React from 'react';
import { Route } from 'react-router-dom';
import StartPage from 'pages/startPage/index';

const getProtectedRoutes = (): JSX.Element[] => {
  let routes: any = [];
    routes = [
      <Route key="start" path="/start">
        <StartPage />
      </Route>,
    ];
  return routes;
};

export default getProtectedRoutes;
