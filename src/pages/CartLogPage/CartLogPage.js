import React, { useEffect } from "react";
import EmptyPrompt from "../../components/EmptyPrompt/EmptyPrompt";
import cartImg from "../../images/cart.svg";
import useCart from "../../context/CartContext/CartContext";
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect";
import Receipt from "./Receipt/Receipt";
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from "./styles.js";

const CartLogPage = () => {
  const classes = useStyles();

  const { getAllCartLogs, allCartLogs, loading, logFetched } = useCart();

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
                {allCartLogs.map((receipt, key) => (
                  <Receipt receiptItems={receipt} key={key} />
                ))}
              </div>
            </>
          )}</>}
    </div>
  );
}

export default withAuthRedirect(CartLogPage);
