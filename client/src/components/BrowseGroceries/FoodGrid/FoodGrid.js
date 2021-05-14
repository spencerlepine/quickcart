import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setId } from "../../../actions/selectedItem"

import FoodCard from "../../FoodCard/FoodCard"
import EmptyPrompt from "../../EmptyPrompt/EmptyPrompt"
import missingImage from "../../../images/empty.jpg"
import SearchBar from "../SearchBar/SearchBar"

import useStyles from "./styles"

import { getGroceries } from "../../../actions/groceries"

const FoodGrid = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  
  const userId = useSelector(state => state.connectedUser)
  const groceries = useSelector((state) => state.groceries)
  const totalGroceryCount = useSelector((state) => state.count)
  const foodItems =
    groceries && groceries[0] !== undefined
      ? groceries.map((item, i) => <FoodCard key={i} groceryItem={item} />)
      : []
  
  const fetchProgress = Math.ceil((groceries.length / totalGroceryCount)*100)

  useEffect(() => {
    dispatch(setId(null))
  }, [dispatch])

  // Try to load groceries JUST GET THE COUNT
  useEffect(() => {
    if (groceries.length === 0) {
      dispatch(getGroceries(userId))
      return
    }
  }, [])

  useEffect(() => {
    if (groceries.length < totalGroceryCount) {
       const lastGrocery = groceries.length > 0 ? groceries.pop().name : 0
       dispatch(getGroceries(userId, lastGrocery))
    } else {
      return
    }
  }, [groceries, totalGroceryCount])

  return (
    <>
      {foodItems.length > 0
        ?
        <>
          <SearchBar />
          <div className={classes.itemsGrid}>
            {fetchProgress < 100 && <div className={classes.progressBar} style={{width:`${fetchProgress}%`}}></div>}
            {foodItems}
          </div>
        </>
        :
        <div className={classes.overviewContainer}>
          <EmptyPrompt
            image={missingImage}
            message="No groceries saved"
            destination="/form"
            buttonText="New Item"
          />
        </div>
      }
    </>
  )
}

export default FoodGrid
