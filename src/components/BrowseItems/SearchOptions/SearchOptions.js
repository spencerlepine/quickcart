import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles.js';

const SearchOptions = ({ searchMode, setSearchMode, setSearchFilter }) => {
  const classes = useStyles();

  const handleViewCategories = () => {
    setSearchMode(false);
    setSearchFilter('');
  };

  return (
    <div className={`search-options ${classes.searchOptions}`}>
      {searchMode && <button onClick={handleViewCategories} className={classes.optionBtn}>View Categories</button>}
      <button className={classes.optionBtn}>Enter Manually</button>
    </div>
  );
};

export default SearchOptions;

SearchOptions.propTypes = {
  searchMode: PropTypes.bool.isRequired,
  setSearchMode: PropTypes.func.isRequired,
  setSearchFilter: PropTypes.func.isRequired,
};