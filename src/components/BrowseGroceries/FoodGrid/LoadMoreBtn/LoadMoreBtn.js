import React from "react"
import useStyles from "./styles"
import useGroceries from "../../../../context/GroceriesContext/GroceriesContext.js"

const LoadMoreBtn = () => {
  const classes = useStyles()

  const { displayStarters, setDisplayStarters, loading } = useGroceries()

  const handleClick = () => {
    setDisplayStarters(false)
  }

  if (displayStarters && !loading) {
    return (
      <button
        onClick={handleClick}
        className={classes.loadMoreBtn}>
        Load More
      </button>
    )
  } else { return null }

}

export default LoadMoreBtn
