import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import groceryCategories from 'config/schema/groceryCategories';
import servingRequirements from 'config/schema/servingRequirements';
import useProducts from 'context/ProductsContext/ProductsContext';
import ProgressBar from './ProgressBar/ProgressBar';
import SuggesterCard from './SuggesterCard/SuggesterCard';
import useStyles from './styles.js';

const FillerItems = ({ cartProducts, classString, category, savedProducts, fetchCategoryDocs }) => {
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
      <div className={classString}>
        <h4>{window.toTitleCase(category)}</h4>
        <ProgressBar progress={parseInt(progress)} />
        {suggested.map((obj, i) => (<SuggesterCard {...obj} key={i} />))}
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
        <FillerItems
          classString={classes.fillerCategory}
          key={i}
          category={category}
          cartProducts={cartProducts}
          savedProducts={savedProducts}
          fetchCategoryDocs={fetchCategoryDocs}
        />
      ))}
    </div>
  );
};

export default CategoryAnalyzer;

CategoryAnalyzer.propTypes = {
  cartProducts: PropTypes.object.isRequired,
};

FillerItems.propTypes = {
  classString: PropTypes.string.isRequired,
  savedProducts: PropTypes.object.isRequired,
  fetchCategoryDocs: PropTypes.func.isRequired,
  cartProducts: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};
