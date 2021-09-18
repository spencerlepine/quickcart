import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import CartViewer from 'components/cart/CartViewer/CartViewer';
import useStyles from './styles.js';

const CartPage = () => {
  const classes = useStyles();

  return (
    <div className={`cart-container ${classes.cartContainer}`}>
      <CartViewer />
    </div >
  );
};

export default withAuthRedirect(CartPage);
