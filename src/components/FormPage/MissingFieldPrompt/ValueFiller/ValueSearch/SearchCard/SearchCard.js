import React from "react";
import missingImage from "../../../images/missing.jpeg"
import useStyles from "./styles.js";

const SearchCard = ({ product, handleSelection }) => {
  const classes = useStyles();

  const itemImageURL = product["image"] || product["image_url"] || product["image_small_url"] || missingImage

  return (<div className={classes.itemCard}>
    <div className={classes.thumbnailContainer} onClick={() => handleSelection(itemImageURL)}>
      <img src={itemImageURL} alt={'product'} className={classes.itemThumbnail}></img>
    </div>
  </div>)
};

export default SearchCard
