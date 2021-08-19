import React from 'react';
import PropTypes from 'prop-types';
// import { CartProvider } from 'context/CartContext/CartContext';
import useStyles from './styles.js';

const AddToCartButton = ({ itemID }) => {
  const classes = useStyles();
  // const { addToCart } = CartProvider();

  const handleClick = () => {
    // addToCart(itemID);
    console.log('HERE, SAVE THIS TO CART', itemID);
  };

  return (
    <div className='edit-item-button'>
      <button className={classes.editItemBtn} onClick={handleClick}>Edit Item</button>
    </div>
  );
};

export default AddToCartButton;

AddToCartButton.propTypes = {
  itemID: PropTypes.string.isRequired,
};