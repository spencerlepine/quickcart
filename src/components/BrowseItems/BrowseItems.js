import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchOptions from './SearchOptions/SearchOptions';
import ProductSearchResult from './ProductSearchResult/ProductSearchResult';
import CategoryBrowser from './CategoryBrowser/CategoryBrowser';
import useStyles from './styles.js';

const BROWSE_CATEGORIES = 'BROWSE_CATEGORIES';
const BROWSE_SEARCH_RESULTS = 'BROWSE_SEARCH_RESULTS';

const BrowseItems = () => {
  const classes = useStyles();

  const [browsingMode, setBrowsingMode] = useState(BROWSE_CATEGORIES);
  const [searchFilter, setSearchFilter] = useState();

  return (
    <div className={`browse-items ${classes.browseItems}`}>
      <SearchBar browsingMode={browsingMode} setBrowsingMode={setBrowsingMode} setSearchFilter={setSearchFilter} />
      <SearchOptions browsingMode={browsingMode} />

      {(browsingMode === BROWSE_SEARCH_RESULTS) ?
        <ProductSearchResult searchFilter={searchFilter} />
        :
        <CategoryBrowser />
      }
    </div>
  );
};

export default BrowseItems;
