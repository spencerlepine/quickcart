import React, { useEffect } from "react";
import EmptyPrompt from "../EmptyPrompt/EmptyPrompt";
import cartImg from "../../images/cart.svg";
import useCart from "../../context/CartContext/CartContext"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import CartLogItem from "./CartLogItem"
import useStyles from "./styles.js";

const CartLogPage = () => {
  const classes = useStyles();

  const { getAllCartLogs, allCartLogs } = useCart()

  const renderEmptyCart = () => {
    return (
      <EmptyPrompt
        image={cartImg}
        message="No cart logs available"
        destination="/"
        buttonText="Browse Items"
        addFilter
      />
    );
  };

  useEffect(() => {
    if (allCartLogs.length === 0) {
      getAllCartLogs()
      return;
    }
  }, []);

  return (
    <div className={classes.logsView}>
      {allCartLogs.length === 0 ? (
        renderEmptyCart()
      ) : (
        <>
          <div className={classes.cartLogs}>
            {allCartLogs.map(list => (
              <div className={classes.cartLog}>
                {list.map(cartItem => <CartLogItem cartLogItem={cartItem} />)}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default withAuthRedirect(CartLogPage);
