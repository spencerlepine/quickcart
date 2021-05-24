import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import FoodCard from "../../FoodCard/FoodCard"
import EmptyPrompt from "../../EmptyPrompt/EmptyPrompt"
import missingImage from "../../../images/empty.jpg"
import SearchBar from "../SearchBar/SearchBar"
import CardGrid from "../../CardGrid/CardGrid"
import useStyles from "./styles"

import { setSearchQuery } from "../../../actions/search"
import { setSelectedCategory } from "../../../actions/selectedCategory"
import { setId } from "../../../actions/selectedItem"
import useExitPrompt from '../../../hooks/useExitPrompt/useExitPrompt.js'

const FoodGrid = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  
  const groceries = useSelector((state) => state.groceries)
  const totalGroceryCount = useSelector((state) => state.count)
  const foodItems =
    groceries && groceries[0] !== undefined
      ? groceries.map((item, i) => <FoodCard key={i} groceryItem={item} />)
      : []
  
  const fetchProgress = Math.ceil((groceries.length / totalGroceryCount)*100)
  const [, setShowExitPrompt] = useExitPrompt(false);

  useEffect(() => {
    setShowExitPrompt(false)
    dispatch(setId(null))
    dispatch(setSearchQuery(""))
    dispatch(setSelectedCategory(null))
  }, [dispatch])

  return (
    <>
      {foodItems.length > 0
        ?
        <>
          <SearchBar />
          {fetchProgress < 100 && <div className={classes.progressBar} style={{width:`${fetchProgress}%`}}></div>}
          <CardGrid cardItems={foodItems} connectionName="groceries" />
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
