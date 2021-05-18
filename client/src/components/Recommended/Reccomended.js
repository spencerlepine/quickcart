import React, { useEffect } from "react"
import { useSelector, useDispatch, connect } from "react-redux"

import useStyles from "./styles.js"
import FoodCard from "../FoodCard/FoodCard"
import CircularProgress from "@material-ui/core/CircularProgress"
import { fetchRecommended } from "../../actions/recommended"

import { setSearchQuery } from "../../actions/search"
import { setSelectedCategory } from "../../actions/selectedCategory"
import { setId } from "../../actions/selectedItem"

const Recommended = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const userId = useSelector(state => state.connectedUser)

  const groceryItems = useSelector(state => state.groceries)

  const recommendedNames = useSelector(state => state.recommended)
  const validGroceryItems = groceryItems.filter(itemObj => recommendedNames.includes(itemObj.name))
  const recommendedCards = validGroceryItems.map((item, i) => <FoodCard key={i} groceryItem={item} />)

  const connectionState = useSelector(state => state.connection)
  const { groceries: groceryConnection } = connectionState
  const { recommended: recommendedConnection } = connectionState

  useEffect(() => {
    dispatch(setId(null))
    dispatch(setSearchQuery(""))
    dispatch(setSelectedCategory(null))
  }, [])

  return (
    <div className={classes.gridView}>
      {recommendedConnection === "connected" && groceryConnection === "connected"
       ?
       <>
          <h3>Cart Recommendations</h3>
          <hr />
          <div className={classes.recommendedGrid}>{recommendedCards}</div>
       </>
       :
       <CircularProgress className={classes.loadSpinner} />
      }
    </div>
  )
}

export default Recommended
