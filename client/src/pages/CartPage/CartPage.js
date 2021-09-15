import React from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import CartViewer from 'components/cart/CartViewer/CartViewer';
import CartSuggestions from 'components/cart/CartSuggestions/CartSuggestions';
import useStyles from './styles.js';

const CartPage = () => {
  const classes = useStyles();

  return (
    <div className={`cart-container ${classes.cartContainer}`}>
      <CartViewer />

      <CartSuggestions />
    </div >
  );
};

export default withAuthRedirect(CartPage);
