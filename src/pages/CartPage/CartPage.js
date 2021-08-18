import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import useStyles from "./styles.js";

const CartPage = () => {
  return (
    <div className="cart-container">
      <p>Under construction</p>
    </div>
  );
};

export default withAuthRedirect(CartPage);
