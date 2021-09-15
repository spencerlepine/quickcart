import React from 'react';
import { useHistory } from 'react-router-dom';
import { WELCOME } from 'config/constants/routeConstants';
import useAuth from 'context/AuthContext/AuthContext';
import useStyles from './styles.js';

const LogoutButton = () => {
  const classes = useStyles();
  const history = useHistory();
  const { logoutUser } = useAuth();

  const handleLougout = () => {
    logoutUser();
    history.push(WELCOME);
  };

  return (
    <div className={`logoutButton ${classes.logout}`}>
      <button className={classes.logoutButton} onClick={handleLougout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
