import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import useStyles from "./styles.js"
import FoodCard from "../FoodCard/FoodCard"
import CircularProgress from "@material-ui/core/CircularProgress"

const Recommended = () => {
  const classes = useStyles()

  const recommendedItems = useSelector((state) => state.recommended)
  const recommendedCards = recommendedItems.map((item, i) => <FoodCard key={i} groceryItem={item} />)

  return (
    <div className={classes.gridView}>
      {recommendedCards.length > 0 ? (
        <>
          <h3>Cart Recommendations</h3>
          <hr />
          <div className={classes.recommendedGrid}>{recommendedCards}</div>
        </>
      ) : <CircularProgress className={classes.loadSpinner} />}
    </div>
  )
}

export default Recommended
