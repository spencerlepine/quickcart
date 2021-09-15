import React from 'react';
import { Link } from 'react-router-dom';
import { CART } from 'config/constants/routeConstants';
import useCart from 'context/CartContext/CartContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles.js';

const CartButton = () => {
  const classes = useStyles();

  const { itemCount } = useCart();

  return (
    <Link
      className={classes.cartLink}
      to={CART}
    >
      <div className={classes.cartLink}>
        {itemCount > 0 && <p>{itemCount}</p>}
        <ShoppingCartIcon fontSize='large' color='action' />
      </div>
    </Link>
  );
};

export default CartButton;
