import React from "react"
import SearchBarComponent from "material-ui-search-bar";
import useSearch from "../../../context/SearchContext/SearchContext"
import useStyles from "./styles.js";
import useGroceries from "../../../context/GroceriesContext/GroceriesContext"

const SearchBar = () => {
  const classes = useStyles();
  const { setCurrentSearch, currentSearch } = useSearch()
  const { setDisplayStarters } = useGroceries()

  const handleSearch = (e) => {
    setDisplayStarters(false)
    setCurrentSearch(e.target.value)
  }
  return (
    <div className={classes.searchbar}>
      <SearchBarComponent
        value={currentSearch}
        onChange={handleSearch} />
    </div>
  )
}

export default SearchBar
