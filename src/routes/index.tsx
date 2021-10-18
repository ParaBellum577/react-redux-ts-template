import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { isSignedInSelector } from 'selectors/auth';
import getProtectedRoutes from 'routes/protected';
import getUnprotectedRoutes from 'routes/unprotected';

interface RouterProps {
}

const MainRouter: React.FC<RouterProps> = ({}) => {
  const isSignedIn = useSelector(isSignedInSelector);

  const rootRedirect = useMemo(() => {
    if (isSignedIn) {
      return '/start'
    }
    return '/login'
  }, [isSignedIn]);

  return (
    <>
      <Switch>
        {isSignedIn ? getProtectedRoutes() : getUnprotectedRoutes()}
        <Redirect to={rootRedirect} />
      </Switch>
    </>
  );
};

export default MainRouter;
