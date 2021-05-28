import React from "react"
import PantryItem from "./PantryItem/PantryItem"
import EmptyPrompt from "../EmptyPrompt/EmptyPrompt"
import groceryBag from "../../images/groceries.png"
import CardGrid from "../CardGrid/CardGrid"
import useGroceries from "../../context/GroceriesContext/GroceriesContext"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import useStyles from "./styles"

const PantryPage = () => {
  const classes = useStyles()
  const { allGroceryItems } = useGroceries()

  const pantryItems = allGroceryItems.length > 0 ? allGroceryItems.map((grocery, i) => <PantryItem groceryItem={grocery} key={i} />) : []
  
  return (
    <div className={classes.overviewContainer}>
      {pantryItems.length > 0
        ?
        <>
          <h3>Recent Purchases</h3>
          <hr />
          <CardGrid cardItems={pantryItems} />
        </>
        
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

export default withAuthRedirect(PantryPage)
