import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../actions/cart";
import { setSearchQuery } from "../../actions/search";
import { setSelectedCategory } from "../../actions/selectedCategory";
import { setId } from "../../actions/selectedItem";

import CartHeader from "./CartHeader/CartHeader";
import CartItem from "./CartItem/CartItem";
import EmptyPrompt from "../EmptyPrompt/EmptyPrompt";
import cartImg from "../../images/cart.svg";
import ReccomendedWidget from "../Recommended/RecommendedWidget/RecommendedWidget";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./styles.js";

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.connectedUser);
  const cartItems = useSelector((state) => state.cart);
  const { cart: connection } = useSelector((state) => state.connection);

  const renderEmptyCart = (currentConnection) => {
    if (currentConnection === "connected") {
      return (
        <EmptyPrompt
          image={cartImg}
          message="Your cart is empty"
          destination="/"
          buttonText="Browse Items"
          addFilter
        />
      );
    } else {
      return <CircularProgress />;
    }
  };

  useEffect(() => {
    dispatch(setId(null));
    dispatch(setSearchQuery(""));
    dispatch(setSelectedCategory(null));
    if (cartItems.length === 0) {
      dispatch(fetchCart(userId));
      return;
    }
  }, []);

  return (
    <div className={classes.cartView}>
      {cartItems.length === 0 ? (
        renderEmptyCart(connection)
      ) : (
        <>
          <CartHeader cartItems={cartItems} />
          <div className={classes.userCart}>
            {cartItems !== null &&
              cartItems.map((item, i) => <CartItem key={i} cartItem={item} />)}
          </div>
        </>
      )}

      <ReccomendedWidget />
    </div>
  );
};

export default Cart;
