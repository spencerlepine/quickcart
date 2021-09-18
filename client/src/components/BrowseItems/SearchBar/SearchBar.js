import React from 'react';
import PropTypes from 'prop-types';
import SearchBarComponent from 'material-ui-search-bar';
import useProducts from 'context/ProductsContext/ProductsContext';
import SearchFilter from './SearchFilter/SearchFilter';
import useStyles from './styles.js';

const SearchBar = ({ searchingExternal, searchMode, setSearchMode, setSearchFilter, searchFilter, sortMode, setSortMode }) => {
  const classes = useStyles();
  const { searchExternalProducts, searchSavedProducts } = useProducts();

  const handleSearch = () => {
    setSearchMode(true);
    if (searchingExternal) {
      searchExternalProducts(searchFilter);
    } else {
      searchSavedProducts(searchFilter);
    }
  };

  const handleCancel = () => {
    setSearchFilter('');
    setSearchMode(false);
  };

  return (
    <div className={`searchbar-container ${classes.searchbarContainer}`}>
      {searchMode && (
        <SearchFilter
          sortMode={sortMode}
          setSortMode={setSortMode}
        />
      )}

      <SearchBarComponent
        className={classes.searchbar}
        value={searchFilter}
        onChange={value => setSearchFilter(value)}
        onRequestSearch={handleSearch}
        onCancelSearch={handleCancel} />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  searchingExternal: PropTypes.bool.isRequired,
  searchMode: PropTypes.bool.isRequired,
  setSearchMode: PropTypes.func.isRequired,
  searchFilter: PropTypes.string.isRequired,
  setSearchFilter: PropTypes.func.isRequired,
  sortMode: PropTypes.object.isRequired,
  setSortMode: PropTypes.func.isRequired,
};
