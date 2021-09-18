import React from 'react';
import PropTypes from 'prop-types';
import CardGrid from 'components/CardGrid/CardGrid';
import useStyles from './styles.js';

const ProductSearchResult = ({ searchFilter, allProducts, isSavedProducts, sortMode }) => {
  const classes = useStyles();

  /* TAKE AN ARRAY OF PRODUCTS AND FILTER THEM */
  const searchRe = new RegExp(`${searchFilter}`, 'gi');
  let sortedList = allProducts.filter(product => (product['name'] || '').match(searchRe) || (product['brand'] || '').match(searchRe));
  if (sortMode && sortMode['sortBy'] && sortMode['orderBy']) {
    const keyMaps = {
      'Purchase Price': 'purchase_price',
      'Name': 'name',
      'Purchase Size': 'purchase_size',
    };
    const key = keyMaps[sortMode['sortBy']];

    if (sortedList.length && typeof sortedList[0][key] === 'string') {
      sortedList = sortedList.sort((productA, productB) => (
        sortMode['orderBy'] === 'asc' ? productA[key].localeCompare(productB[key]) : productA[key].localeCompare(productB[key]) * -1
      ));
    } else {
      // What about PARSING the price if it is a string?
      sortedList = sortedList.sort((productA, productB) => (
        sortMode['orderBy'] === 'asc' ? productA[key] - productB[key] : productB[key] - productA[key]
      ));
    }
  };
  /* /\ TAKE AN ARRAY OF PRODUCTS AND FILTER THEM /\ */

  return (
    <div className={`product-search-result ${classes.productSearchResult}`}>
      <CardGrid list={sortedList} isSavedProducts={isSavedProducts} searchFilter={searchFilter} />
    </div>
  );
};

export default ProductSearchResult;

ProductSearchResult.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  allProducts: PropTypes.array.isRequired,
  isSavedProducts: PropTypes.bool.isRequired,
  sortMode: PropTypes.object.isRequired,
};
