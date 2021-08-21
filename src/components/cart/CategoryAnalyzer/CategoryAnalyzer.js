import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import groceryCategories from 'config/schema/groceryCategories';
import servingRequirements from 'config/schema/servingRequirements';
import useProducts from 'context/ProductsContext/ProductsContext';
import CartCard from '../CartCard/CartCard';
import useStyles from './styles.js';

const FillerItems = props => {
  const cartCount = Object.values(props.cartProducts[props.category] || {}).length;
  const saved = Object.values(props.savedProducts[props.category] || {});

  useEffect(() => {
    if (saved.length === 0) {
      props.fetchCategoryDocs(props.category, true);
    }
  }, []);

  const requiredProducts = servingRequirements[props.category].products;
  if (cartCount < requiredProducts) {
    const suggested = saved.sort(() => Math.random() - 0.5).slice(0, Math.min(Math.max(parseInt((requiredProducts - cartCount) + 3), 0)));
    const progress = (cartCount * 100 / requiredProducts).toFixed(0);

    return (
      <div>
        <h5>{window.toTitleCase(props.category)}</h5><p>{progress}%</p>
        {suggested.map((obj, i) => (<CartCard {...obj} key={i} />))}
      </div>
    );
  } else {
    return null;
  }
};

const CategoryAnalyzer = ({ cartProducts }) => {
  const classes = useStyles();
  const { fetchCategoryDocs, savedProducts } = useProducts();

  const categories = Object.values(groceryCategories);
  return (
    <div className={`category-analyzer ${classes.categoryAnalyzer}`}>
      {categories.map((category, i) => (
        <FillerItems category={category} cartProducts={cartProducts} savedProducts={savedProducts} key={i} fetchCategoryDocs={fetchCategoryDocs} />
      ))}
    </div>
  );
};

export default CategoryAnalyzer;

CategoryAnalyzer.propTypes = {
  cartProducts: PropTypes.object.isRequired,
};
