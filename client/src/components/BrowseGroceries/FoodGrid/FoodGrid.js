import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setId } from "../../../actions/selectedItem"

import FoodCard from "../../FoodCard/FoodCard"
import EmptyPrompt from "../../EmptyPrompt/EmptyPrompt"
import missingImage from "../../../images/empty.jpg"
import useStyles from "./styles"

import { getGroceries } from "../../../actions/groceries"

const FoodGrid = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const groceries = useSelector((state) => state.groceries)
  const authKey = useSelector((state) => state.authentication)
  const totalGroceryCount = useSelector((state) => state.count)
  const foodItems =
    groceries && groceries[0] !== undefined
      ? groceries.map((item, i) => <FoodCard key={i} groceryItem={item} />)
      : []
  
  const fetchProgress = Math.ceil((groceries.length / totalGroceryCount)*100)

  useEffect(() => {
    dispatch(setId(null))
  }, [dispatch])

  useEffect(() => {
    if (groceries.length < totalGroceryCount || totalGroceryCount === 0) {
      dispatch(getGroceries(authKey, groceries.length))
    }
  }, [groceries, totalGroceryCount])

  return (
    <>
      {foodItems.length > 0
        ?
        <div className={classes.itemsGrid}>
          {fetchProgress < 100 && <div className={classes.progressBar} style={{width:`${fetchProgress}%`}}></div>}
          {foodItems}
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
