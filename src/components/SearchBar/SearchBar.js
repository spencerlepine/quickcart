import React from 'react';
import SearchBarComponent from 'material-ui-search-bar';
import useSearch from '../../context/SearchContext/SearchContext';
import useStyles from './styles.js';
import useGroceries from '../../context/GroceriesContext/GroceriesContext';

const SearchBar = () => {
  const classes = useStyles();
  const { setCurrentSearch, currentSearch } = useSearch();
  const { setDisplayStarters } = useGroceries();

  const handleSearch = (newVal) => {
    setDisplayStarters(false);
    setCurrentSearch(newVal);
  }

  const handleCancel = () => {
    setCurrentSearch("");
  }

  return (
    <div className={classes.searchbar}>
      <SearchBarComponent
        value={currentSearch}
        onChange={(newVal) => handleSearch(newVal)}
        onCancelSearch={handleCancel} />
    </div>
  )
}

export default SearchBar;
