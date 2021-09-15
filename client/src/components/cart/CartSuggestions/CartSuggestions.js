import React, { useState, useEffect } from 'react';
import CardGrid from 'components/CardGrid/CardGrid';
// import useProducts from 'context/useProducts/useProducts';
import useStyles from './styles.js';

const CartSuggestions = () => {
  const classes = useStyles();
  const cartSuggestions = {}; // const { cartSuggestions } = useProducts();
  const [suggestedItems, setSuggestedItems] = useState([]);

  useEffect(() => {
    const categories = Object.keys(cartSuggestions);
    if (categories.length) {
      const newSuggestions = [];
      for (const category in categories) {
        newSuggestions.push(cartSuggestions[category].slice(1));
      }
      setSuggestedItems(newSuggestions);
    }
  }, []);

  return (
    <section className={classes.cartSuggestions}>
      <h3>Recommended</h3>
      <hr />
      <CardGrid list={suggestedItems} singleRow={true} />
    </section>
  );
};

export default CartSuggestions;
