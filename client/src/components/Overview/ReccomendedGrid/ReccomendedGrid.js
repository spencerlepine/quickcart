import React from "react"
import { useSelector } from "react-redux"

import FoodCard from "../../FoodCard/FoodCard"
import useStyles from "./styles"

const ReccomendedGrid = () => {
  const classes = useStyles()

  const reccomendedItems = useSelector((state) => state.reccomended)
  const reccomendedCards = []
  for (const prop in reccomendedItems) {
    reccomendedItems[prop].forEach((item) => {
      return reccomendedCards.push(<FoodCard key={reccomendedCards.length} groceryItem={item} />)
    })
  }

//   <>
//   {reccomendedCards.length > 0
//     &&
//   <div className={classes.itemsGrid}>{reccomendedCards}</div>}
// </>
  return <>{reccomendedCards}</>
}

export default ReccomendedGrid
