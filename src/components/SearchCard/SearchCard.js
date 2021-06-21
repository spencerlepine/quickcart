import React from "react";
import useForm from "../../context/FormContext/FormContext"
import useSpoonacular from "../../context/SpoonacularContext/SpoonacularContext"
import formatGroceryObj from "../../modules/formatGroceryObj"
import { FORM } from "../../constants/routeConstants"
import DetailsPopup from "../DetailsPopup/DetailsPopup"
import { useHistory } from "react-router";
import SearchThumbnail from "./SearchThumbnail/SearchThumbnail"
import SearchItemDetails from "./SearchItemDetails/SearchItemDetails"

const SearchCard = ({ product }) => {
  const history = useHistory()
  const { getProductDetails, itemDetails } = useSpoonacular()
  const { setSearchSelection, setEditSelection } = useForm()

  const handleClick = () => {
    const formattedProduct = formatGroceryObj(product)
    setEditSelection(null)
    setSearchSelection(formattedProduct)
    history.push(FORM)
  }

  return (<DetailsPopup
    CardComponent={<SearchThumbnail product={product} />}
    DetailsComponent={<SearchItemDetails product={itemDetails} />}
  />)
};

export default SearchCard
