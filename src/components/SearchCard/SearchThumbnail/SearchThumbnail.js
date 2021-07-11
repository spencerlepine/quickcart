import React from "react";
import formatGroceryObj from "../../../modules/formatGroceryObj";
import useSpoonacular from "../../../context/SpoonacularContext/SpoonacularContext";
import useStyles from "./styles.js";

const formatName = (name) => {
  if (name && name.length > 36) {
    return name.slice(0, 36) + "..."
  } else {
    return name
  }
}

const SearchThumbnail = ({ product }) => {
  const classes = useStyles();
  const { getProductDetails, itemDetails } = useSpoonacular();

  const formattedProduct = formatGroceryObj(product);
  const itemName = formattedProduct.name;
  const itemImageURL = formattedProduct.image;

  const handleClick = async () => {
    const productId = product["id"]
    if (`${itemDetails["id"]}` !== `${product["id"]}`) {
      await getProductDetails(productId)
    }
  }

  return (
    <div className={classes.itemCard} onClick={handleClick}>
      <div className={classes.thumbnailContainer}>
        <img src={itemImageURL} alt={itemName} className={classes.itemThumbnail}></img>
      </div>
      <p className={classes.itemName}>{formatName(itemName)}</p>
    </div>
  );
}

export default SearchThumbnail;
