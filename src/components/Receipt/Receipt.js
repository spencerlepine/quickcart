import React from 'react';
import CartLogItem from './CartLogItem/CartLogItem';
import useStyles from './styles.js';

const Receipt = ({ receiptItems }) => {
  const classes = useStyles();

  const receiptDate = `${receiptItems[0]}`;
  const thisReceipt = receiptItems.slice(1,);
  let totalCost = thisReceipt.reduce(
    (total, item) =>
    (total +=
      item.quantity * (parseFloat(item.purchase_price) || 1)),
    0
  );

  return (
    <div className={classes.cartLog}>
      <p>Date: {receiptDate}</p>

      {thisReceipt.map((cartItem, key) => <CartLogItem key={key} cartLogItem={cartItem} />)}

      <p className={classes.receiptCost}><span className={classes.totalText}>Total</span> ${totalCost}</p>
      <h4 className={classes.itemsSold}># ITEMS SOLD {thisReceipt.length}</h4>
    </div>
  )
}

export default Receipt;
