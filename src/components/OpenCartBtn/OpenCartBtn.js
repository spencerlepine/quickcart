import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useCart from '../../context/CartContext/CartContext';
import useStyles from './styles.js';

const OpenCartBtn = () => {
  const classes = useStyles();

  const { allCartItems } = useCart();
  const cartLength = allCartItems.length;

  return (
    <Link
      className={classes.link}
      to='/cart'
    >
      <div className={classes.cartLink}>
        <ShoppingCartIcon fontSize='large' color='action' />
        {cartLength > 0 && <p>{cartLength}</p>}
      </div>
    </Link>
  );
};

export default OpenCartBtn;
