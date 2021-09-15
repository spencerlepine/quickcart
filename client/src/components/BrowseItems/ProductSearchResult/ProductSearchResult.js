import React from 'react';
import PropTypes from 'prop-types';
import CardGrid from 'components/CardGrid/CardGrid';
import useStyles from './styles.js';

const ProductSearchResult = ({ searchFilter, allProducts, isSavedProducts }) => {
  const classes = useStyles();

  return (
    <div className={`product-search-result ${classes.productSearchResult}`}>
      <CardGrid list={allProducts} isSavedProducts={isSavedProducts} searchFilter={searchFilter} />
    </div>
  );
};

export default ProductSearchResult;

ProductSearchResult.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  allProducts: PropTypes.array.isRequired,
  isSavedProducts: PropTypes.bool.isRequired,
};
