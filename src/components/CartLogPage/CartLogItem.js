import React, { useEffect } from "react";
import useStyles from "./styles.js";

const CartLogItem = ({ cartLogItem }) => {
  const classes = useStyles();

  const productPrice = parseFloat(
    cartLogItem.purchase_price
  ).toLocaleString("en-US", { style: "currency", currency: "USD" })

  return (
    <div className={classes.logsView}>
      {/* <p>{cartLogItem._id}</p> */}
      <h4>{cartLogItem.name}</h4>
      <p>x{cartLogItem.quantity}</p>
      <h3>{productPrice}</h3>
    </div>
  );
};

export default CartLogItem;