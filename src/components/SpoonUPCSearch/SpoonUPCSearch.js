import React, { useState } from "react";
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import useSpoonacular from "../../context/SpoonacularContext/SpoonacularContext.js";
import SearchBar from "material-ui-search-bar";
import useStyles from "./styles.js";
import CircularProgress from '@material-ui/core/CircularProgress';
import UPCResult from "./UPCResult/UPCResult"
import PromptButtons from "./PromptButtons/PromptButtons"

const SpoonUPCSearch = () => {
  const classes = useStyles();
  const [upcSearch, setUpcSearch] = useState("");
  const { fetchUPCItemData, loading } = useSpoonacular()

  const handleSubmit = async (e) => {
    if (upcSearch) {
      await fetchUPCItemData(upcSearch)
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
              value={upcSearch}
              onChange={(newValue) => setUpcSearch(newValue)}
              onRequestSearch={handleSubmit}
            />}
        </div>
        <UPCResult />
      </div>
    </div>
  );
};

export default withAuthRedirect(SpoonUPCSearch)