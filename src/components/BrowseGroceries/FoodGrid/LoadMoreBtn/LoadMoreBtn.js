import React from "react"
import useStyles from "./styles"
import useGroceries from "../../../../context/GroceriesContext/GroceriesContext.js"

const LoadMoreBtn = () => {
  const classes = useStyles()

  const { displayStarters, setDisplayStarters } = useGroceries()

  const handleClick = () => {
    setDisplayStarters(false)
  }

  if (displayStarters) {
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
