import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import useStyles from "./styles.js"
import FoodCard from "../../FoodCard/FoodCard"
import CircularProgress from "@material-ui/core/CircularProgress"

const RecommendedWidget = () => {
  const classes = useStyles()

  const recommendedItems = useSelector((state) => state.recommended)

  const recommendedCards = []
  let keyCount = 0
  for (const prop in recommendedItems) {
    recommendedCards.push(...recommendedItems[prop].map((item, i) => <FoodCard key={keyCount + i} groceryItem={item} />))
    keyCount += recommendedItems[prop].length
  }

  return (
    <div className={classes.widgetView}>
      {recommendedCards.length > 0 && (
        <>
          <h3>Recommended</h3>
          <hr />
          <div className={classes.itemsGrid}>{recommendedCards}</div>
        </>
      )}
    </div>
  )
}

export default RecommendedWidget
