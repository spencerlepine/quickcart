import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles.js';

const SearchBar = ({ setSearchMode, searchMode }) => {
  const classes = useStyles();

  return (
    <div className={`searchbar ${classes.searchbar}`}>
      <button onClick={() => setSearchMode(!searchMode)}>Search Products</button>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  setSearchMode: PropTypes.func.isRequired,
  searchMode: PropTypes.bool.isRequired,
};
