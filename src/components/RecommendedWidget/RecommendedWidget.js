import React from "react"

import useStyles from "./styles.js"
import FoodCard from "../FoodCard/FoodCard"
import useRecommended from "../../context/RecommendedContext/RecommendedContext.js"

const RecommendedWidget = () => {
  const classes = useStyles()

  const { allRecommendedItems } = useRecommended()

  const recommendedCards = []
  for (const category in allRecommendedItems) {
    let [ firstCategoryElem ] = allRecommendedItems[category]
    if (firstCategoryElem) {
      recommendedCards.push(<FoodCard groceryItem={firstCategoryElem} key={category} />)
    }
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
