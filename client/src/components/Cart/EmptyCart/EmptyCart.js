import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";
import cartImg from "../../../images/cart.svg";

const EmptyCart = () => {
  const classes = useStyles();

  return (
    <div className={classes.emptyCart}>
      <img className={classes.cart} src={cartImg} alt="cart"></img>
      <p className={classes.emptyMessage}>Your cart is empty</p>
      <span className={classes.browseButton}>
        <Link to="/" className={classes.orderButton}>
          Browse Items
        </Link>
      </span>
    </div>
  );
};

export default EmptyCart;
