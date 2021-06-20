import React, { useState } from "react";
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import useSpoonacular from "../../context/SpoonacularContext/SpoonacularContext.js";
import SearchBar from "material-ui-search-bar";
import useStyles from "./styles.js";
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchResult from "./SearchResult/SearchResult";
import PromptButtons from "./PromptButtons/PromptButtons"

const SpoonacularSearch = () => {
  const classes = useStyles();
  const [itemSearch, setItemSearch] = useState("");
  const { searchProducts, loading } = useSpoonacular()

  const handleSubmit = async (e) => {
    if (itemSearch) {
      await searchProducts(itemSearch)
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
      </div>
    </div>
  );
};

export default withAuthRedirect(SpoonacularSearch)
