import React from 'react';
import PropTypes from 'prop-types';
import useCart from 'context/CartContext/CartContext';
import useStyles from './styles.js';

const AddToCartButton = ({ item, categoryID, isBubbleBtn }) => {
  const classes = useStyles();
  const { addToCart } = useCart();

  const handleClick = e => {
    e.preventDefault();
    addToCart(item, categoryID);
  };

  return (
    <div className='add-item-button'>
      <button className={isBubbleBtn ? `${classes.bubbleAddBtn}` : `${classes.addToCartBtn}`} onClick={handleClick}>
        {isBubbleBtn ? '+' : 'ADD TO CART'}
      </button>
    </div>
  );
};

export default AddToCartButton;

AddToCartButton.propTypes = {
  item: PropTypes.object.isRequired,
  categoryID: PropTypes.string.isRequired,
  isBubbleBtn: PropTypes.bool,
};

AddToCartButton.defaultProps = {
  isBubbleBtn: false,
};