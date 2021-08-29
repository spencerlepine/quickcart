import React from 'react';
import PropTypes from 'prop-types';
import CardGrid from 'components/CardGrid/CardGrid';
// import groceryCategories from 'config/schema/groceryCategories';
import useStyles from './styles.js';

const ProductSearchResult = ({ searchFilter, allProducts, isSavedProducts }) => {
  const classes = useStyles();

  const products = Object.values(allProducts).reduce((arr, categoryObj) => (
    arr.concat(Object.values(categoryObj))
  ), []);

  return (
    <div className={`product-search-result ${classes.productSearchResult}`}>
      <CardGrid list={products} isSavedProducts={isSavedProducts} searchFilter={searchFilter} />
    </div>
  );
};

export default ProductSearchResult;

ProductSearchResult.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  allProducts: PropTypes.object.isRequired,
  isSavedProducts: PropTypes.bool.isRequired,
};
