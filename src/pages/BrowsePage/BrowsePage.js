import React from "react";
import withAuthRedirect from "hooks/useAuthRedirect/useAuthRedirect";
import CategoryBrowser from "components/browse/CategoryBrowser/CategoryBrowser";
import SearchOptions from "components/search/SearchOptions/SearchOptions";
import SearchBar from "components/search/SearchBar/SearchBar";
import useStyles from "./styles.js";

const BrowsePage = () => {
  return (
    <div className="browse-container">
      <SearchBar />
      <SearchOptions />
      <CategoryBrowser />
    </div>
  );
};

export default withAuthRedirect(BrowsePage);
