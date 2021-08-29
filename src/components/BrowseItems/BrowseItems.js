import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar/SearchBar';
import SearchOptions from './SearchOptions/SearchOptions';
import ProductSearchResult from './ProductSearchResult/ProductSearchResult';
import CategoryBrowser from './CategoryBrowser/CategoryBrowser';
import useStyles from './styles.js';

const BrowseItems = ({ productsObj, isSavedProducts }) => {
  const classes = useStyles();

  const [searchMode, setSearchMode] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div className={`browse-items ${classes.browseItems}`}>
      <SearchBar searchMode={searchMode} searchFilter={searchFilter} setSearchMode={setSearchMode} setSearchFilter={setSearchFilter} />
      <SearchOptions searchMode={searchMode} setSearchFilter={setSearchFilter} setSearchMode={setSearchMode} />

      {searchMode ?
        <ProductSearchResult searchFilter={searchFilter} allProducts={productsObj} isSavedProducts={isSavedProducts} />
        :
        <CategoryBrowser categoryProducts={productsObj} isSavedProducts={isSavedProducts} />
      }
    </div>
  );
};

export default BrowseItems;

BrowseItems.propTypes = {
  productsObj: PropTypes.object.isRequired,
  isSavedProducts: PropTypes.bool,
};

BrowseItems.defaultProps = {
  isSavedProducts: false,
};
