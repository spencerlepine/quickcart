import React from 'react';
import { Link } from 'react-router-dom';
import { CART } from 'config/constants/routeConstants';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles.js';

const CartButton = () => {
  const classes = useStyles();

  // const { allCartItems } = useCart();
  const cartLength = 0; //allCartItems.length;

  return (
    <Link
      className={classes.cartLink}
      to={CART}
    >
      <div className={classes.cartLink}>
        <ShoppingCartIcon fontSize='large' color='action' />
        {cartLength > 0 && <p>{cartLength}</p>}
      </div>
    </Link>
  );
};

export default CartButton;
