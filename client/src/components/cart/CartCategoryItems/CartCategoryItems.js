import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CartCard from '../CartCard/CartCard';
import useCart from 'context/CartContext/CartContext';
import useStyles from './styles.js';

const CartCategoryItems = ({ categoryID, products }) => {
  const classes = useStyles();
  const { fetchCategoryDocs } = useCart();

  useEffect(() => {
    fetchCategoryDocs(categoryID);
  }, []);

  const categoryItems = Object.values(products);
  return (
    <React.Fragment>
      {categoryItems.length > 0 && <div className={`cart-category-items ${classes.cartCategoryItems}`}>
        <h4>{window.toTitleCase(categoryID)}</h4>
        <hr />
        {categoryItems.map((item, i) => (
          <CartCard
            key={i}
            _id={item['_id']}
            quantity={item['quantity']}
            image={item['image']}
            category={item['category']}
            name={item['name']}
            serving_size={item['serving_size']}
            purchase_price={item['purchase_price']}
            isSavedProduct={false}
          />
        ))}
      </div>}
    </React.Fragment>
  );
};

export default CartCategoryItems;

CartCategoryItems.propTypes = {
  products: PropTypes.object.isRequired,
  categoryID: PropTypes.string.isRequired,
};
