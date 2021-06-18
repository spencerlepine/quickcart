import React from "react"
import useCart from "../../../context/CartContext/CartContext.js"
import useStyles from "./styles.js"

const CartItem = ({ cartItem }) => {
  const classes = useStyles()

  const { getAllCartItems, updateCartItem, deleteCartItem } = useCart()

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      const itemId = item._id
      deleteCartItem(itemId)
    } else {
      const updatedQuantity = {
        ...item,
        quantity: item.quantity - 1,
      }
      updateCartItem(updatedQuantity)
    }
  }

  const handleIncrement = (item) => {
    const updatedQuantity = {
      ...item,
      quantity: item.quantity + 1,
    }
    updateCartItem(updatedQuantity)
    getAllCartItems()
  }

  const itemPrice = (
    parseFloat(cartItem["purchase_price"]) *
    cartItem.quantity
  ).toLocaleString("en-US", { style: "currency", currency: "USD" })

  return (
    <div className={classes.cartItem}>
      <img className={classes.itemImage} src={cartItem.image} alt={cartItem.name}></img>
      <p className={classes.itemName}>{cartItem.name}</p>
      <p className={classes.itemPrice}>
        {itemPrice}
      </p>
      <div className={classes.btn} onClick={() => handleDecrement(cartItem)}>
        -
      </div>
      <p className={classes.itemCount}>{cartItem.quantity}</p>
      <div className={classes.btn} onClick={() => handleIncrement(cartItem)}>
        +
      </div>
    </div>
  )
}

export default CartItem
