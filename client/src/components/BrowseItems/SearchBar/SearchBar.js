import React from 'react';
import PropTypes from 'prop-types';
import SearchBarComponent from 'material-ui-search-bar';
import SearchFilter from './SearchFilter/SearchFilter';
import useStyles from './styles.js';

const SearchBar = ({ searchMode, setSearchMode, setSearchFilter, searchFilter, sortMode, setSortMode }) => {
  const classes = useStyles();

  const handleSearch = () => {
    setSearchMode(true);
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
  searchMode: PropTypes.bool.isRequired,
  setSearchMode: PropTypes.func.isRequired,
  searchFilter: PropTypes.string.isRequired,
  setSearchFilter: PropTypes.func.isRequired,
  sortMode: PropTypes.object.isRequired,
  setSortMode: PropTypes.func.isRequired,
};
