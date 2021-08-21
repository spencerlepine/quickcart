import React from 'react';
import PropTypes from 'prop-types';
import CardGrid from 'components/CardGrid/CardGrid';
// import groceryCategories from 'config/schema/groceryCategories';
import useStyles from './styles.js';

const ProductSearchResult = ({ searchFilter, allProducts, isSavedProducts }) => {
  const classes = useStyles();
  console.log(searchFilter);

  // const categories = Object.values(groceryCategories);
  const products = Object.values(allProducts).reduce((arr, categoryObj) => (
    arr.concat(Object.values(categoryObj))
  ), []);
  console.log(Object.values(allProducts), products);

  // take { cat: {id:{},id{}}, cat: {id:{},id{}} }
  // to [{}{}{}{}{}]

  // [{id:{},id{}},{id:{},id{}}]

  return (
    <div className={`product-search-result ${classes.productSearchResult}`}>
      <CardGrid list={products} isSavedProducts={isSavedProducts} />
    </div>
  );
};

export default ProductSearchResult;

ProductSearchResult.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  allProducts: PropTypes.array.isRequired,
  isSavedProducts: PropTypes.bool.isRequired,
};
