import React from 'react';
import { Route } from 'react-router-dom';
import StartPage from 'pages/startPage/index';


const getUnprotectedRoutes = (): JSX.Element[] => [
  <Route key="login" path="/login">
    <StartPage />
  </Route>,
];

export default getUnprotectedRoutes;
