import React from "react"
import useNotification from "../../../context/NotificationContext/NotificationContext.js"
import useCart from "../../../context/CartContext/CartContext.js"

import useStyles from "./styles.js"
import useGroceries from "../../../context/GroceriesContext/GroceriesContext.js"

const todaysDate = new Date().toISOString().slice(0, 10)

const CartHeader = ({ cartItems }) => {
  const classes = useStyles()

  const { logCartItem, deleteCartItem } = useCart()
  const { updateGroceryItem } = useGroceries()
  const { setCurrentNotification } = useNotification()
 
  const handleCartPurchase = () => {
    if (cartItems.length) {
      cartItems.forEach((item) => {
        const groceryObjNewDate = {
          ...item,
          last_purchased: todaysDate,
        }
        logCartItem(groceryObjNewDate)
        deleteCartItem(groceryObjNewDate.name)
        updateGroceryItem(groceryObjNewDate)
      })
      const purchaseMessage = {
        name: "Update complete!",
        message: `Saved new grocery dates`,
        type: "success"
      }
      setCurrentNotification(purchaseMessage)
    }
  }

  let totalCost = cartItems.reduce(
    (total, item) =>
      (total +=
        item.quantity * parseFloat(item.purchase_price)),
    0
  )

  return (
    <div className={classes.cartHeader}>
      <button className={classes.orderButton} onClick={handleCartPurchase}>
        Checkout Cart
      </button>
      <h4 className={classes.total}>
        {totalCost.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </h4>
    </div>
  )
}

export default CartHeader
