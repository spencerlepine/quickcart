import React from 'react';
import useStyles from './styles.js';

const CartLogItem = ({ cartLogItem }) => {
  const classes = useStyles();

  const itemPrice = parseFloat(
    cartLogItem.purchase_price
  ).toFixed(2);
  const finalPrice = Number.parseFloat(itemPrice * (cartLogItem.quantity || 1)).toFixed(2);

  return (
    <div className={classes.logView}>
      <h4 className={classes.productName}>{cartLogItem.name}</h4>
      <h3 className={classes.productPrice}>{finalPrice}</h3>
    </div>
  );
}

export default CartLogItem;