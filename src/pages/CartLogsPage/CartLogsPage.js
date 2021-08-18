import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import useStyles from './styles.js';

const CartLogsPage = () => {
  const classes = useStyles();

  return (
    <div className="cart-log-container">
      <p className={classes.test}>under construction</p>
    </div>
  );
};

export default withAuthRedirect(CartLogsPage);
