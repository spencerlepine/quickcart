import React from "react"
import useStyles from "./styles.js"
import FoodCard from "../../../FoodCard/FoodCard"

const CategoryCards = ({ categoryItems }) => {
  const classes = useStyles()
  const cardList = categoryItems.map(item => <FoodCard groceryItem={item} />)

  return (
    <div className={classes.gridView}>
      {cardList}
    </div>
  )
}

export default CategoryCards
