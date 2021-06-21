import React from "react";
// import FoodCard from "../../FoodCard/FoodCard"
import SearchCard from "../../SearchCard/SearchCard"
import useFoodFacts from "../../../context/FoodFactsContext/FoodFactsContext.js";
import formatGroceryObj from "../../../modules/formatGroceryObj"
import useStyles from "./styles.js";

const UPCResultOFF = () => {
  const classes = useStyles();
  const { itemUPCSearch } = useFoodFacts()

  if (itemUPCSearch) {
    const product = formatGroceryObj({ ...itemUPCSearch })

    return (
      <div className={classes.upcResult}>
        <SearchCard product={product} />
      </div>
    );
  } else { return null }
};

export default UPCResultOFF
