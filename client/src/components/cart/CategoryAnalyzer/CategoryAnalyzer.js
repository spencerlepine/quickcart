import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import groceryCategories from 'config/schema/groceryCategories';
import servingRequirements from 'config/schema/servingRequirements';
import useProducts from 'context/ProductsContext/ProductsContext';
import CartCard from '../CartCard/CartCard';
import useStyles from './styles.js';

const FillerItems = ({ cartProducts, category, savedProducts, fetchCategoryDocs }) => {
  const cartCount = Object.values(cartProducts[category] || {}).length;
  const saved = Object.values(savedProducts[category] || {});

  useEffect(() => {
    if (saved.length === 0) {
      fetchCategoryDocs(category, true);
    }
  }, []);

  const requiredProducts = servingRequirements[category].products;
  if (cartCount < requiredProducts) {
    const suggested = saved.sort(() => Math.random() - 0.5).slice(0, Math.min(Math.max(parseInt((requiredProducts - cartCount) + 3), 0)));
    const progress = (cartCount * 100 / requiredProducts).toFixed(0);

    return (
      <div>
        <h5>{window.toTitleCase(category)}</h5><p>{progress}%</p>
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

FillerItems.propTypes = {
  savedProducts: PropTypes.object.isRequired,
  fetchCategoryDocs: PropTypes.func.isRequired,
  cartProducts: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};
