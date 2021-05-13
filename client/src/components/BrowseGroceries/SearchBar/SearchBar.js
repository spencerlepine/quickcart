import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setSearchQuery } from "../../../actions/search"
import SearchBarElem from "material-ui-search-bar"
import useStyles from "./styles"

const SearchBar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState()

  const handleChange = (text) => {
    setSearchText(text.trim())
    dispatch(setSearchQuery(text.trim()))
  }

  const handleCancel = () => {
    setSearchText("")
    dispatch(setSearchQuery(""))
  }

  return (
    <div className={classes.searchBar}>
      <SearchBarElem
        placeholder="Search grocery item..."
        value={searchText}
        onChange={handleChange}
        onCancelSearch={handleCancel}
        autoFocus
      />
    </div>
  )
}

export default SearchBar
