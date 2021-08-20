import React, { useState } from 'react';
import CartCategoryItems from '../CartCategoryItems/CartCategoryItems';
import CartSuggestions from '../CartSuggestions/CartSuggestions';
// import { CartProvider } from 'context/CartContext/CartContext';
import useStyles from './styles.js';

const CartViewer = () => {
  const classes = useStyles();
  const [analyzeMode, setAnalyzeMode] = useState(false);
  const allCartItems = {}; // const { allCartItems } = useCart();

  const toggleCartMode = () => {
    setAnalyzeMode(prevMode => !prevMode);
  };

  const categories = Object.values(allCartItems);
  const cartTotal = '$4.99';
  const modeTitle = analyzeMode ? 'View List' : 'Analyze Cart';
  return (
    <React.Fragment >
      {/* <CartProvider> */}
      <div className={`cart-viewer ${classes.cartViewer}`}>
        <div className={`cart-options ${classes.cartOptions}`}>
          <button>Checkout</button>

          <button onClick={toggleCartMode}>{modeTitle}</button>

          <p>{cartTotal}</p>
        </div>

        {analyzeMode ?
          <section className={classes.analyzeContainer}>
            <p>Under construction</p>
          </section>
          :
          <section className={classes.cartListContainer}>
            {categories.map((category, i) => (
              <CartCategoryItems items={allCartItems[category]} key={i} />
            ))}
          </section>
        }

        <CartSuggestions />
      </div>
      {/* </CartProvider> */}
    </React.Fragment >
  );
};

export default CartViewer;
