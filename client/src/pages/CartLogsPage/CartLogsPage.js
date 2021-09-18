import React, { useEffect } from 'react';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import useStyles from './styles.js';

import useCart from 'context/CartContext/CartContext';
import Receipt from 'components/cart/Receipt/Receipt';

const CartLogsPage = () => {
  const classes = useStyles();
  const { getCartLogs, cartLogs } = useCart();

  useEffect(() => {
    if (!cartLogs) {
      getCartLogs();
    }
  }, [cartLogs]);

  return (
    <div className={`cart-log-container ${classes.cartLogs}`}>
      {cartLogs && cartLogs.map((receipt, key) => (
        <Receipt receiptItems={receipt} key={key} />
      ))}
    </div >
  );
};

export default withAuthRedirect(CartLogsPage);
