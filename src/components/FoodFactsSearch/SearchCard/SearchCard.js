import React from "react";
import missingImage from "../../../images/missing.jpeg"
import useForm from "../../../context/FormContext/FormContext"
import formatGroceryObj from "../../../modules/formatGroceryObj"
import { FORM } from "../../../constants/routeConstants"
import useStyles from "./styles.js";
import { useHistory } from "react-router";

const formatName = (name) => {
  if (name && name.length > 36) {
    return name.slice(0, 36) + "..."
  } else {
    return name
  }
}

const formatBrand = (brand) => {
  if (brand && brand.length > 16) {
    return brand.slice(0, 16) + "..."
  } else {
    return brand
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

  const itemName = product["name"] || product["product_nameen"] || product["product_name"] || product["generic_name"]
  const itemBrand = product["brands"] || "unknown"
  const itemImageURL = product["image"] || product["image_url"] || product["image_small_url"] || missingImage
  const itemGrade = product["nutrition_grade_en"] || product["nutrition_grade_fr"]

  return (<div className={classes.itemCard}>
    <div className={classes.thumbnailContainer} onClick={handleClick}>
      <img src={itemImageURL} alt={itemName} className={classes.itemThumbnail}></img>
    </div>
    <p className={classes.itemName}>{formatName(itemName)}</p>
    <p className={classes.itemBrand}>{formatBrand(itemBrand)}</p>
    {/* <p className={classes.itemGrade}>{itemGrade}</p> */}
  </div>)
};

export default SearchCard
