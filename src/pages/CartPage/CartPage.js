import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import useStyles from './styles.js';

const CartPage = () => {
  const classes = useStyles();

  return (
    <div className="cart-container">
      <p className={classes.test}>under construction</p>
    </div>
  );
};

export default withAuthRedirect(CartPage);
