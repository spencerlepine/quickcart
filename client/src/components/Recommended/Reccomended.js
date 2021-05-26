import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import useStyles from "./styles.js"
import CircularProgress from "@material-ui/core/CircularProgress"

import { setSearchQuery } from "../../actions/search"
import { setSelectedCategory } from "../../actions/selectedCategory"
import { setId } from "../../actions/selectedItem"
import CategoryCards from "./CategoryCards/CategoryCards.js"

const Recommended = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const groceryItems = useSelector(state => state.groceries)

  const recommendedNames = useSelector(state => state.recommended)
  const groupedItems = {}
  groceryItems.forEach(item => groupedItems[item.category] = [])
  const validGroceryItems = groceryItems.filter(itemObj => {
    if (recommendedNames.includes(itemObj.name)) {
      groupedItems[itemObj.category].push(itemObj)
      return true
    }
    return false
  })

  const categorySliders = []
  for (const category in groupedItems) {
    let thisItemArray = groupedItems[category]
    categorySliders.push(<CategoryCards categoryItems={thisItemArray} />)
  }

  const connectionState = useSelector(state => state.connection)
  const { recommended: recommendedConnection } = connectionState

  useEffect(() => {
    dispatch(setId(null))
    dispatch(setSearchQuery(""))
    dispatch(setSelectedCategory(null))
  }, [dispatch])

  return (
    <div className={classes.gridView}>
      {recommendedConnection !== "disconnected"
       ?
       <>
          <h3>Cart Recommendations</h3>
          <hr />
          {categorySliders}
       </>
       :
       <CircularProgress className={classes.loadSpinner} />
      }
    </div>
  )
}

export default Recommended
