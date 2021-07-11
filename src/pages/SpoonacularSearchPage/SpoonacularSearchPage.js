import React, { useState } from 'react';
import withAuthRedirect from '../../hooks/useAuthRedirect/useAuthRedirect';
import useSpoonacular from '../../context/SpoonacularContext/SpoonacularContext.js';
import SearchBar from 'material-ui-search-bar';
import useStyles from './styles.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchResult from './SearchResult/SearchResult';
import useFoodFacts from '../../context/FoodFactsContext/FoodFactsContext.js';
import PromptButtons from './PromptButtons/PromptButtons';
import SearchResulfOFF from './SearchResultOFF/SearchResultOFF';

const SpoonacularSearchPage = () => {
  const classes = useStyles();
  const [itemSearch, setItemSearch] = useState('');
  const { searchProducts, loading } = useSpoonacular();
  const { searchProductsOFF } = useFoodFacts();

  const handleSubmit = async (e) => {
    if (itemSearch) {
      await searchProducts(itemSearch);
      await searchProductsOFF(itemSearch);
    }
  }

  return (
    <div className={classes.formContainer}>
      <PromptButtons />
      <div className={classes.form} noValidate>
        <div className={classes.itemDetails}>
          {loading ?
            <CircularProgress />
            :
            <SearchBar
              value={itemSearch}
              onChange={(newValue) => setItemSearch(newValue)}
              onRequestSearch={handleSubmit}
            />}
        </div>
        <SearchResult />
        <SearchResulfOFF />
      </div>
    </div>
  );
}

export default withAuthRedirect(SpoonacularSearchPage);
