import React from 'react';
import { Link } from 'react-router-dom';
import { CART_LOGS } from 'config/constants/routeConstants';
import useStyles from './styles.js';

const ViewCartLogsButton = () => {
  const classes = useStyles();

  return (
    <div className={`viewCartLogsButton ${classes.logContianer}`}>
      <Link to={CART_LOGS} className={classes.logButton}>
        View Cart Logs
      </Link>
    </div>
  );
};

export default ViewCartLogsButton;
