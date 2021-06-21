import React from "react";
import DetailsPopup from "../DetailsPopup/DetailsPopup"
import SearchThumbnail from "./SearchThumbnail/SearchThumbnail"
import SearchItemDetails from "./SearchItemDetails/SearchItemDetails"
import formatGroceryObj from "../../modules/formatGroceryObj"

const SearchCard = ({ product }) => {
  let formattedProduct = formatGroceryObj(product)
  return (<DetailsPopup
    CardComponent={<SearchThumbnail product={formattedProduct} />}
    DetailsComponent={<SearchItemDetails product={formattedProduct} />}
  />)
};

export default SearchCard
