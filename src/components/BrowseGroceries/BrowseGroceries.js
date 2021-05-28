import React from "react"
import useGroceries from "../../context/GroceriesContext/GroceriesContext"
import FoodGrid from "./FoodGrid/FoodGrid"
import CategoryLabels from "./CategoryLabels/CategoryLabels"

const BrowseGroceries  = () => {
  const { loading } = useGroceries

  return (
    <>
      {!loading
        &&
        <>
          <CategoryLabels />
          <FoodGrid />
        </>
      }
    </>
  )
}

export default BrowseGroceries
