import React, { useState } from 'react';
import CartCategoryItems from '../CartCategoryItems/CartCategoryItems';
import CartSuggestions from '../CartSuggestions/CartSuggestions';
import groceryCategories from 'config/schema/groceryCategories';
import useCart from 'context/CartContext/CartContext';
import CategoryAnalyzer from '../CategoryAnalyzer/CategoryAnalyzer';
import MissingMessage from 'components/ui/MissingMessage/MissingMessage';
import { Link } from 'react-router-dom';
import { HOME } from 'config/constants/routeConstants';
import useStyles from './styles.js';

const getCartTotal = productsObj => (
  Object.values(productsObj).reduce((arr, categoryObj) => arr.concat(Object.values(categoryObj)), []).reduce((sum, obj) => sum += parseFloat(obj['purchase_price']), 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
);

const CartViewer = () => {
  const classes = useStyles();
  const [analyzeMode, setAnalyzeMode] = useState(false);
  const { cartProducts, itemCount, cartToLogs } = useCart();

  const toggleCartMode = () => {
    setAnalyzeMode(prevMode => !prevMode);
  };

  const handleCheckoutCart = () => {
    for (const category in cartProducts) {
      const products = Object.values(cartProducts[category]);

      products.forEach(item => cartToLogs(item, category));
    }
  };

  const categories = Object.values(groceryCategories);
  const cartTotal = getCartTotal(cartProducts);
  const modeTitle = analyzeMode ? 'View List' : 'Analyze Cart';
  return (
    <div className={`cart-viewer ${classes.cartViewer}`}>
      <div className={`cart-options ${classes.cartOptions}`}>
        <button disabled={itemCount === 0} className={`${classes.checkoutBtn} ${classes.btn}`} onClick={handleCheckoutCart}>{`Checkout ${itemCount} Item${itemCount > 0 ? 's' : ''}`}</button>

        <button onClick={toggleCartMode} className={`${classes.toggleBtn} ${classes.btn} toggleBtn`}>{modeTitle}</button>

        <p className={classes.cartTotal}>Total: <span className={classes.dollarPrice}>{cartTotal}</span></p>
      </div>

      {analyzeMode ?
        <section className={classes.analyzeContainer}>
          <CategoryAnalyzer cartProducts={cartProducts} />
        </section>
        :
        <section className={classes.cartListContainer}>
          <>
            {categories.map((category, i) => (
              <CartCategoryItems products={cartProducts[category] || {}} categoryID={category} key={i} />
            ))}

            {(Object.values(cartProducts).length === 0) && (
              <MissingMessage
                message={'Cart is Empty'}
                iconType={'lonely_shiba'}
                child={(
                  <Link to={HOME} className={`${classes.redirectButton} ${classes.btn}`}>Browse Products</Link>
                )}
              />
            )}
          </>
        </section>
      }

      <CartSuggestions />
    </div>
  );
};

export default CartViewer;
