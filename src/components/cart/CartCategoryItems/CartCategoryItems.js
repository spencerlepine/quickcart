import React from 'react';
import PropTypes from 'prop-types';
import CartCard from '../CartCard/CartCard';
import useStyles from './styles.js';

const CartCategoryItems = ({ items }) => {
  const classes = useStyles();

  return (
    <div className={`cart-category-items ${classes.cartCategoryItems}`}>
      {items.map((item, i) => (
        <CartCard
          key={i}
          _id={item['_id']}
          quantity={item['quantity']}
          image={item['image']}
          name={item['name']}
          unit_size={item['unit_size']}
          purchase_price={item['purchase_price']}
        />
      ))}
    </div>
  );
};

export default CartCategoryItems;

CartCategoryItems.propTypes = {
  items: PropTypes.array.isRequired,
};
