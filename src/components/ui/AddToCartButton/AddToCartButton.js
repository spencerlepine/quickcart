import React from 'react';
import PropTypes from 'prop-types';
import useCart from 'context/CartContext/CartContext';
import useStyles from './styles.js';

const AddToCartButton = ({ item, categoryID }) => {
  const classes = useStyles();
  const { addToCart } = useCart();

  const handleClick = e => {
    e.preventDefault();
    addToCart(item, categoryID);
  };

  return (
    <div className='add-item-button'>
      <button className={classes.addToCartBtn} onClick={handleClick}>+</button>
    </div>
  );
};

export default AddToCartButton;

AddToCartButton.propTypes = {
  item: PropTypes.object.isRequired,
  categoryID: PropTypes.string.isRequired,
};