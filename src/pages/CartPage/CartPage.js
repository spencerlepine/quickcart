import React, { useEffect } from 'react';
import CartHeader from '../../components/CartHeader/CartHeader';
import CartItem from '../../components/CartItem/CartItem';
import EmptyPrompt from '../../components/EmptyPrompt/EmptyPrompt';
import cartImg from '../../images/cart.svg';
import ReccomendedWidget from '../../components/RecommendedWidget/RecommendedWidget';
import useCart from '../../context/CartContext/CartContext';
import withAuthRedirect from '../../hooks/useAuthRedirect/useAuthRedirect';
import groupItemsByCategory from './groupItemsByCategory';
import CircularProgress from '@material-ui/core/CircularProgress';
import OpenLogs from '../../components/OpenLogs/OpenLogs';
import useStyles from './styles.js';

const CartPage = () => {
  const classes = useStyles();

  const { getAllCartItems, allCartItems, loading, initialFetch } = useCart();

  const renderEmptyCart = () => {
    return (
      <EmptyPrompt
        image={cartImg}
        message='Your cart is empty'
        destination='/'
        buttonText='Browse Items'
        addFilter
      />
    );
  };

  useEffect(() => {
    if (allCartItems.length === 0 && !initialFetch) {
      getAllCartItems();
      return;
    }
  });

  const sortedCart = groupItemsByCategory(allCartItems);

  return (
    <div className={classes.cartView}>
      {loading
        ?
        <CircularProgress />
        :
        <>{
          allCartItems.length === 0 ? (
            renderEmptyCart()
          ) : (
            <>
              <CartHeader cartItems={allCartItems} />
              <div className={classes.userCart}>
                {sortedCart !== null &&
                  sortedCart.map((item, i) => <CartItem key={i} cartItem={item} />)}
              </div>
            </>
          )
        }</>
      }

      <ReccomendedWidget />
      <OpenLogs />
    </div>
  );
}

export default withAuthRedirect(CartPage);