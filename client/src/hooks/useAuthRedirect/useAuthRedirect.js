import React from 'react';
import { WELCOME, HOME } from 'config/constants/routeConstants';
import useAuth from 'context/AuthContext/AuthContext';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = (Component, isAuthPage = false) =>
  () => {
    // Get the current user from AuthContext
    const { currentUser } = useAuth();

    if (currentUser) {
      if (isAuthPage) {
        return <Redirect to={HOME} />;
      } else {
        return <Component />;
      }
    } else {
      if (isAuthPage) {
        return <Component />;
      } else {
        return <Redirect to={WELCOME} />;
      }
    }
  };

export default withAuthRedirect;
