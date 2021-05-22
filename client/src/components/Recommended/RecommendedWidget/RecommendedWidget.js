import React from "react"
import { useSelector } from "react-redux"

import useStyles from "./styles.js"
import FoodCard from "../../FoodCard/FoodCard"

const RecommendedWidget = () => {
  const classes = useStyles()

  const groceryItems = useSelector(state => state.groceries)

  const recommendedNames = useSelector((state) => state.recommended)
  const validGroceryItems = groceryItems.filter(itemObj => recommendedNames.includes(itemObj.name))
  const recommendedCards = validGroceryItems.map((item, i) => <FoodCard key={i} groceryItem={item} />)

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
