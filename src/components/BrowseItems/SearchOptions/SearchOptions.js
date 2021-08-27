import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { CREATE } from 'config/constants/routeConstants';
import useStyles from './styles.js';

const SearchOptions = ({ searchMode, setSearchMode, setSearchFilter }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleViewCategories = () => {
    setSearchMode(false);
    setSearchFilter('');
  };

  return (
    <div className={`search-options ${classes.searchOptions}`}>
      {searchMode && <button onClick={handleViewCategories} className={classes.optionBtn}>View Categories</button>}
      <button onClick={() => history.push(CREATE)} className={classes.optionBtn}>Enter Manually</button>
    </div>
  );
};

export default SearchOptions;

SearchOptions.propTypes = {
  searchMode: PropTypes.bool.isRequired,
  setSearchMode: PropTypes.func.isRequired,
  setSearchFilter: PropTypes.func.isRequired,
};