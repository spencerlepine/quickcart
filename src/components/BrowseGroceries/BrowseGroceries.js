import React from "react"
import useGroceries from "../../context/GroceriesContext/GroceriesContext"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import FoodGrid from "./FoodGrid/FoodGrid"
import CategoryLabels from "./CategoryLabels/CategoryLabels"
import SearchBar from "./SearchBar/SearchBar"
import CircularProgress from '@material-ui/core/CircularProgress';

const BrowseGroceries = () => {
  const { loading } = useGroceries()

  return (
    <>
      {loading
        ?
        <CircularProgress />
        :
        <>
          <SearchBar />
          <CategoryLabels />
          <FoodGrid />
        </>
      }
    </>
  )
}

export default withAuthRedirect(BrowseGroceries)
