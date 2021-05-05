import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setId } from "../../../actions/selectedItem"

import FoodCard from "../../FoodCard/FoodCard"
import EmptyPrompt from "../../EmptyPrompt/EmptyPrompt"
import missingImage from "../../../images/empty.jpg"
import useStyles from "./styles"

import { getGroceries } from "../../../actions/groceries"

const FoodGrid = ({ authentication }) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const groceries = useSelector((state) => state.groceries)
  const foodItems =
    groceries && groceries[0] !== undefined
      ? groceries.map((item, i) => <FoodCard key={i} groceryItem={item} />)
      : []

  useEffect(() => {
    dispatch(setId(null))
  }, [dispatch])

  const handleShowMore = () => {
    dispatch(getGroceries(authentication, groceries.length))
  }

  return (
    <>
      {foodItems.length > 0
        ?
        <div className={classes.itemsGrid}>
          {foodItems}
          <button className={classes.loadMoreBtn} onClick={handleShowMore}>Show More</button>
        </div>
        :
        <div className={classes.overviewContainer}>
          <EmptyPrompt
            image={missingImage}
            message="Empty List!"
            destination="/form"
            buttonText="New Item"
          />
        </div>
      }
    </>
  )
}

export default FoodGrid
