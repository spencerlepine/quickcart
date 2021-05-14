import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedCategory } from "../../../../actions/selectedCategory"
import useStyles from "./styles"

const CategorySelector = ({ categoryName, selectorValue }) => {
    const dispatch = useDispatch()
  const classes = useStyles()

  const selectedCategory = useSelector(state => state.selectedCategory)

  const handleSelection = () => {
    // Set the global selected category to this name
    dispatch(setSelectedCategory(selectorValue))
  }
  
  const currentlySelected = selectedCategory === categoryName ? { backgroundColor: "rgb(211 224 255)" } : {}

  const formatedName = categoryName[0].toUpperCase() + categoryName.slice(1, categoryName.length)
  
  return (
    <>
      <p
        className={classes.categoryCard} 
        onClick={handleSelection}
        style={currentlySelected}>
        {formatedName}
      </p>
    </>
  )
}

export default CategorySelector
