import React from 'react';
import PropTypes from 'prop-types';
import CartLogItem from './CartLogItem/CartLogItem';
import useStyles from './styles.js';

const Receipt = ({ receiptItems }) => {
  const classes = useStyles();

  const receiptDate = `${receiptItems[0]}`;
  // console.log(receiptItems);
  const thisReceipt = receiptItems.slice(1);
  const totalCost = thisReceipt.reduce(
    (total, item) => (total +=
      item.quantity * (parseFloat(item.purchase_price) || 1)),
    0,
  ).toFixed(2);

  return (
    <div className={classes.cartLog}>
      <p>Date: {receiptDate}</p>

      {thisReceipt.map((cartItem, key) => <CartLogItem key={key} cartLogItem={cartItem} />)}

      <p className={classes.receiptCost}><span className={classes.totalText}>Total</span> ${totalCost}</p>
      <h4 className={classes.itemsSold}># ITEMS SOLD {thisReceipt.length}</h4>
    </div>
  );
};

export default Receipt;

Receipt.propTypes = {
  receiptItems: PropTypes.array.isRequired,
};
