import React, { useEffect } from "react";
import EmptyPrompt from "../../components/EmptyPrompt/EmptyPrompt";
import cartImg from "../../images/cart.svg";
import useCart from "../../context/CartContext/CartContext";
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect";
import Receipt from "../../components/Receipt/Receipt";
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
    if (allCartLogs && allCartLogs.length === 0 && JSON.stringify(allCartLogs) !== JSON.stringify([])) {
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
        <React.Fragment>
          {!allCartLogs || (allCartLogs && allCartLogs.length) === 0 ? (
            renderEmptyCart()
          ) : (
            <React.Fragment>
              <div className={classes.cartLogs}>
                {allCartLogs.map((receipt, key) => (
                  <Receipt receiptItems={receipt} key={key} />
                ))}
              </div>
            </React.Fragment>
          )}</React.Fragment>}
    </div>
  );
}

export default withAuthRedirect(CartLogPage);