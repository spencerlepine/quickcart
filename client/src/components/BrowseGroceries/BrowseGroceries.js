import React from "react"
import useStyles from "./styles"

import FoodGrid from "./FoodGrid/FoodGrid"
import CategoryLabels from "./CategoryLabels/CategoryLabels"

const BrowseGroceries  = () => {
  const classes = useStyles()

  return (
    <>
      <CategoryLabels />
      <FoodGrid />
    </>
  )
}

export default BrowseGroceries
