import React, { useEffect } from "react";
import useSpoonacular from "../../../context/SpoonacularContext/SpoonacularContext.js";
import SearchCard from "../../../components/SearchCard/SearchCard";
import SearchMessage from "../../../components/SearchMessage/SearchMessage";
import useStyles from "./styles.js";

const SearchResult = () => {
  const classes = useStyles();
  const { searchResultList, setSearchResultList } = useSpoonacular();

  useEffect(() => {
    setSearchResultList(null);
  }, []);

  if (searchResultList && searchResultList.length > 0) {
    const resultList = searchResultList.map(item => <SearchCard product={item} />);

    return (
      <div className={classes.resultGrid}>
        {resultList}
      </div>
    );
  } else { return <SearchMessage message="Search for products via brand or keywords" />; }
}

export default SearchResult;