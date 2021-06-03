import React, { useState } from "react";
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import useFoodFacts from "../../context/FoodFactsContext/FoodFactsContext.js";
import SearchBar from "material-ui-search-bar";
import useStyles from "./styles.js";
import SearchResult from "./SearchResult/SearchResult";
import CircularProgress from '@material-ui/core/CircularProgress';

const DatabaseForm = () => {
  const classes = useStyles();
  const [itemSearch, setItemSearch] = useState("");
  const { searchProducts, loading } = useFoodFacts()

  const handleSubmit = async (e) => {
    await searchProducts(itemSearch)
  }
  return (
    <div className={classes.formContainer}>
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
      </div>
    </div>
  );
};

export default withAuthRedirect(DatabaseForm)
