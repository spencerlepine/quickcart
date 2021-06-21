import React, { useEffect } from "react";
import EmptyPrompt from "../EmptyPrompt/EmptyPrompt";
import cartImg from "../../images/cart.svg";
import useCart from "../../context/CartContext/CartContext"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import CartLogItem from "./CartLogItem/CartLogItem"
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from "./styles.js";

const CartLogPage = () => {
  const classes = useStyles();

  const { getAllCartLogs, allCartLogs, loading, logFetched } = useCart()

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
    if (allCartLogs.length === 0 && JSON.stringify(allCartLogs) !== JSON.stringify([])) {
      getAllCartLogs()
      return;
    }
  }, [allCartLogs, logFetched]);

  return (
    <div className={classes.logsView}>
      {loading
        ?
        <CircularProgress />
        :
        <>
          {allCartLogs.length === 0 ? (
            renderEmptyCart()
          ) : (
            <>
              <div className={classes.cartLogs}>
                {allCartLogs.map((list, key) => {
                  let totalCost = list.reduce(
                    (total, item) =>
                    (total +=
                      item.quantity * parseFloat(item.purchase_price)),
                    0
                  )
                  return (
                    <div className={classes.cartLog} key={key}>
                      {list.map((cartItem, key) => <CartLogItem key={key} cartLogItem={cartItem} />)}
                      <p>Total: ${totalCost} ({list.length} items)</p>
                    </div>
                  )
                })}
              </div>
            </>
          )}</>}
    </div>
  );
};

export default withAuthRedirect(CartLogPage);
