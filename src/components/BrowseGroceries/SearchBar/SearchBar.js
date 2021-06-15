import React from "react"
import SearchBarComponent from "material-ui-search-bar";
import useSearch from "../../../context/SearchContext/SearchContext"
import useStyles from "./styles.js";

const SearchBar  = () => {
  const classes = useStyles();
  const { setCurrentSearch, currentSearch } = useSearch()

  return (
    <div className={classes.searchbar}>
      <SearchBarComponent
      value={currentSearch}
      onChange={(newValue) => setCurrentSearch(newValue)}
      />
    </div>
  )
}

export default SearchBar
