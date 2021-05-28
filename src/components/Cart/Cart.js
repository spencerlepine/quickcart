import React, { useEffect } from "react";
import CartHeader from "./CartHeader/CartHeader";
import CartItem from "./CartItem/CartItem";
import EmptyPrompt from "../EmptyPrompt/EmptyPrompt";
import cartImg from "../../images/cart.svg";
import ReccomendedWidget from "../RecommendedWidget/RecommendedWidget";
import useCart from "../../context/CartContext/CartContext"
import useStyles from "./styles.js";

const Cart = () => {
  const classes = useStyles();

  const { getAllCartItems, allCartItems } = useCart()

  const renderEmptyCart = () => {
    return (
      <EmptyPrompt
        image={cartImg}
        message="Your cart is empty"
        destination="/"
        buttonText="Browse Items"
        addFilter
      />
    );
  };

  useEffect(() => {
    if (allCartItems.length === 0) {
      getAllCartItems()
      return;
    }
  }, []);

  return (
    <div className={classes.cartView}>
      {allCartItems.length === 0 ? (
        renderEmptyCart()
      ) : (
        <>
          <CartHeader cartItems={allCartItems} />
          <div className={classes.userCart}>
            {allCartItems !== null &&
              allCartItems.map((item, i) => <CartItem key={i} cartItem={item} />)}
          </div>
        </>
      )}

      <ReccomendedWidget />
    </div>
  );
};

export default Cart;
