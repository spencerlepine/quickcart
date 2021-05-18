import React from "react"
import { useSelector } from "react-redux";
import PantryItem from "./PantryItem/PantryItem"
import EmptyPrompt from "../EmptyPrompt/EmptyPrompt"
import groceryBag from "../../images/groceries.png"
import useStyles from "./styles"

const Pantry = () => {
  const classes = useStyles()
  const storedGroceries = useSelector(state => state.groceries)
  const pantryItems = storedGroceries.length > 0 ? storedGroceries.map((grocery, i) => <PantryItem groceryItem={grocery} key={i} />) : []
  
  return (
    <div className={classes.overviewContainer}>
      {pantryItems.length > 0
        ?
        <div className={classes.itemsGrid}>{pantryItems}</div>
        : 
        <EmptyPrompt
            image={groceryBag}
            message="No recent purchases"
            destination="/"
            buttonText="Browse Items"
          />
      }
    </div>
  )
}

export default Pantry
