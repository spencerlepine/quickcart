import React, { useEffect, useState } from "react";
import useProductOnboard from "../../context/ProductOnboardContext/ProductOnboardContext"
import SearchCard from "./SearchCard/SearchCard"
import useForm from "../../context/FormContext/FormContext";
import SearchMessage from "../SearchMessage/SearchMessage"
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchBar from "material-ui-search-bar";
import useStyles from "./styles.js";

const ImageSearch = () => {
  const classes = useStyles();
  const { setCurrentImageSelection } = useForm()
  const { imageSearchResult, setImageSearchResult, loading, keywordSearch, searchCallback } = useProductOnboard()
  const [itemSearch, setItemSearch] = useState("");

  useEffect(() => {
    setImageSearchResult([])
  }, [])

  const handleSubmit = async (e) => {
    await keywordSearch(itemSearch, searchCallback)
  }

  const handleSearchClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const resultList = imageSearchResult.map((item, i) => (<SearchCard product={item} key={i} handleSelection={setCurrentImageSelection} />))

  return (
    <div className={classes.popupContainer}>
      <div className={classes.popupElement}>
        <div className={classes.resultGrid}>
          {loading ?
            <CircularProgress />
            :
            <SearchBar
              className={classes.popupSearchBar}
              onClick={handleSearchClick}
              value={itemSearch}
              onChange={(newValue) => setItemSearch(newValue)}
              onRequestSearch={handleSubmit}
            />}
          <div className={classes.searchResultCards}>
            {resultList.length > 0 ?
              <>{resultList}</>
              :
              <SearchMessage message="Search for product images" />
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSearch
