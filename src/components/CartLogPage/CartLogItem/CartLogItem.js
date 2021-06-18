import React, { useEffect } from "react";
import useStyles from "./styles.js";

const CartLogItem = ({ cartLogItem }) => {
  const classes = useStyles();

  const itemPrice = parseFloat(
    cartLogItem.purchase_price
  )
  const finalPrice = itemPrice * (cartLogItem.quantity || 1)
  const priceString = finalPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })

  return (
    <div className={classes.logView}>
      <h4 className={classes.productName}>{cartLogItem.name}</h4>
      <h3 className={classes.productPrice}>{priceString}</h3>
    </div>
  );
};

export default CartLogItem;