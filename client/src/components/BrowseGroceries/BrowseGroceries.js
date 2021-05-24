import React from "react"

import FoodGrid from "./FoodGrid/FoodGrid"
import { useSelector } from "react-redux";
import CategoryLabels from "./CategoryLabels/CategoryLabels"

const BrowseGroceries  = () => {
  const { groceries: connection } = useSelector((state) => state.connection);

  return (
    <>
      {connection !== "disconnected"
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
