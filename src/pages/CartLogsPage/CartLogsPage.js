import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import useStyles from "./styles.js";

const CartLogsPage = () => {
  return (
    <div className="cart-log-container">
      <p>Under construction</p>
    </div>
  );
};

export default withAuthRedirect(CartLogsPage);
