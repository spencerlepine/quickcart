import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar/SearchBar';
import SearchOptions from './SearchOptions/SearchOptions';
import ProductSearchResult from './ProductSearchResult/ProductSearchResult';
import CategoryBrowser from './CategoryBrowser/CategoryBrowser';
import useStyles from './styles.js';

const categoryObjToArr = obj => (
  Object.values(obj).reduce((arr, categoryObj) => (
    arr.concat(Object.values(categoryObj))
  ), [])
);

const BrowseItems = ({ productsObj, isSavedProducts }) => {
  const classes = useStyles();

  const [productsArray, setProductsArray] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [sortMode, setSortMode] = useState({});

  useEffect(() => {
    // DON'T Reduce the categorized object whenenever searchFilter updates
    setProductsArray(categoryObjToArr(productsObj));
  }, [productsObj]);

  return (
    <div className={`browse-items ${classes.browseItems}`}>
      <SearchBar
        searchingExternal={!isSavedProducts}
        searchMode={searchMode}
        searchFilter={searchFilter}
        setSearchMode={setSearchMode}
        setSearchFilter={setSearchFilter}
        sortMode={sortMode}
        setSortMode={setSortMode}
      />
      <SearchOptions searchMode={searchMode} setSearchFilter={setSearchFilter} setSearchMode={setSearchMode} />

      {searchMode ?
        <ProductSearchResult searchFilter={searchFilter} allProducts={productsArray} isSavedProducts={isSavedProducts} sortMode={sortMode} />
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
