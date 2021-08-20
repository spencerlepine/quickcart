import React, { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchOptions from 'components/SearchOptions/SearchOptions';
import ProductSearchResult from 'components/ProductSearchResult/ProductSearchResult';
import withAuthRedirect from 'hooks/useAuthRedirect/useAuthRedirect';
import useSaved from 'context/SavedContext/SavedContext';
import useStyles from './styles.js';

import sampleData from 'config/sampleData/sampleProducts';

const SavedPage = () => {
  const classes = useStyles();
  const [searchFilter, setSearchFilter] = useState(null);

  // const { savedProducts: saved } = useSaved();
  console.log(useSaved);
  const saved = sampleData;
  const frozenProducts = Object.keys(saved['frozenFood'] || {}).map(idKey => saved['frozenFood'][idKey]);

  useEffect(() => {
    // fetchAllSaved();
    console.log('FETCH ALL OF THE SAVED ITEMS');
  }, []);

  return (
    <div className={`saved-container ${classes.savedContainer}`}>
      <SearchBar setSearchFilter={setSearchFilter} />
      <SearchOptions browsingMode={'BROWSE_SEARCH_RESULTS'} />

      <ProductSearchResult searchFilter={searchFilter} allProducts={frozenProducts} />
    </div>
  );
};

export default withAuthRedirect(SavedPage);
