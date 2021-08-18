import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchOptions from "./SearchOptions/SearchOptions";
import CategoryBrowser from "./CategoryBrowser/CategoryBrowser";
import useStyles from "./styles.js";

const BrowseItems = () => {
  const classes = useStyles();

  return (
    <div className="browse-items">
      <p className={classes.test}>under construction</p>
      <SearchBar />
      <SearchOptions />
      <CategoryBrowser />
    </div>
  );
};

export default BrowseItems;
