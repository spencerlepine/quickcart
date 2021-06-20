import React from "react";
import useForm from "../../context/FormContext/FormContext"
import formatGroceryObj from "../../modules/formatGroceryObj"
import { FORM } from "../../constants/routeConstants"
import useStyles from "./styles.js";
import { useHistory } from "react-router";

const formatName = (name) => {
  if (name && name.length > 36) {
    return name.slice(0, 36) + "..."
  } else {
    return name
  }
}

const SearchCard = ({ product }) => {
  const classes = useStyles();
  const history = useHistory()
  const { setSearchSelection, setEditSelection } = useForm()

  const handleClick = () => {
    const formattedProduct = formatGroceryObj(product)
    setEditSelection(null)
    setSearchSelection(formattedProduct)
    history.push(FORM)
  }

  const formattedProduct = formatGroceryObj(product)
  const itemName = formattedProduct.name
  const itemImageURL = formattedProduct.image

  return (<div className={classes.itemCard}>
    <div className={classes.thumbnailContainer} onClick={handleClick}>
      <img src={itemImageURL} alt={itemName} className={classes.itemThumbnail}></img>
    </div>
    <p className={classes.itemName}>{formatName(itemName)}</p>
  </div>)
};

export default SearchCard
