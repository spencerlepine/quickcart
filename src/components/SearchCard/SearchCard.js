import React from "react";
import DetailsPopup from "../DetailsPopup/DetailsPopup"
import SearchThumbnail from "./SearchThumbnail/SearchThumbnail"
import SearchItemDetails from "./SearchItemDetails/SearchItemDetails"

const SearchCard = ({ product }) => {
  return (<DetailsPopup
    CardComponent={<SearchThumbnail product={product} />}
    DetailsComponent={<SearchItemDetails product={product} />}
  />)
};

export default SearchCard
