import React from "react"
import { useSelector } from "react-redux"

import FoodCard from "../../FoodCard/FoodCard"
import useStyles from "./styles"

const RecommendedGrid = () => {
  const classes = useStyles()

  const recommendedItems = useSelector((state) => state.recommended)
  const recommendedCards = []
  for (const prop in recommendedItems) {
    recommendedItems[prop].forEach((item) => {
      return recommendedCards.push(<FoodCard key={recommendedCards.length} groceryItem={item} />)
    })
  }

//   <>
//   {recommendedCards.length > 0
//     &&
//   <div className={classes.itemsGrid}>{recommendedCards}</div>}
// </>
  return <>{recommendedCards}</>
}

export default RecommendedGrid
