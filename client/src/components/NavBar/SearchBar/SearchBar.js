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
        setSearchText(text)
        dispatch(setSearchQuery(text))
    }

    return (
        <div className={classes.searchBar}>
            <SearchBarElem
                onRequestSearch={() => alert('yeet')}
                placeholder="Search grovery item..."
                value={searchText}
                onChange={handleChange}
                autoFocus
            />
        </div>
    )
}

export default SearchBar
