import React from 'react';
import PropTypes from 'prop-types';
import SearchBarComponent from 'material-ui-search-bar';
import useStyles from './styles.js';

const SearchBar = ({ searchMode, setSearchMode, setSearchFilter, searchFilter }) => {
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
        <React.Fragment>
          <button className={classes.orderOption}>SORT BY</button>{/*<button>Price</button>*/}
          <button className={classes.orderOption}>DESC</button>
        </React.Fragment>
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
};
