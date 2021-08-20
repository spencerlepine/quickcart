import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles.js';

const CartCard = ({ _id, quantity, image, name, unit_size, purchase_price }) => {
  const classes = useStyles();
  // const { decrementCartItem, incrementCartItem } = useCart();

  const incrementCartItem = () => {

  };

  const decrementCartItem = () => {

  };

  const itemPrice = purchase_price; /*(
    parseFloat(item["purchase_price"]) *
    quantity
  ).toLocaleString("en-US", { style: "currency", currency: "USD" })*/

  return (
    <div className={`cart-card ${classes.cartCard}`}>
      <div className={classes.imageContainer}>
        <img className={classes.itemImage} src={image} alt={name}></img>
      </div>
      <div className={classes.itemInfo}>
        <p className={classes.itemName}>{name}</p>
        <p className={classes.itemSize}>
          ({unit_size})
          <span className={classes.itemPrice}>
            {` - ${itemPrice}`}
          </span>
        </p>
      </div>

      <div
        className={`${classes.btn}
        ${classes.deleteBtn}`}
        onClick={() => incrementCartItem(_id)}
        role={'presentation'}
      >
        -
      </div>

      <p className={classes.itemCount}>{quantity}</p>

      <div
        className={classes.btn}
        onClick={() => decrementCartItem(_id)}
        role={'presentation'}>
        +
      </div>
    </div>
  );
};

export default CartCard;

CartCard.propTypes = {
  _id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unit_size: PropTypes.string.isRequired,
  purchase_price: PropTypes.number.isRequired,
};
