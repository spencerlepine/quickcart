import React from "react"
import useGroceries from "../../context/GroceriesContext/GroceriesContext"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import FoodGrid from "./FoodGrid/FoodGrid"
import CategoryLabels from "./CategoryLabels/CategoryLabels"
import SearchBar from "./SearchBar/SearchBar"

const BrowseGroceries = () => {
  const { loading } = useGroceries();

  return (
    <>
      <SearchBar />
      <CategoryLabels />
      <FoodGrid loading={loading} />
    </>
  )
}

export default withAuthRedirect(BrowseGroceries)
