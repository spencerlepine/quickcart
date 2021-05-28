import React from "react"
import useCart from "../../../context/CartContext/CartContext.js"
import useRecommended from "../../../context/RecommendedContext/RecommendedContext"
import useStyles from "./styles.js"

const CartItem = ({ cartItem }) => {
  const classes = useStyles()

  const { getAllCartItems, updateCartItem, deleteCartItem } = useCart()
  const { getAllRecommendedItems } = useRecommended()
  
  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      deleteCartItem(item.name)
    } else {
      const updatedQuantity = {
        ...item,
        quantity: item.quantity - 1,
      }
      getAllRecommendedItems()
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

  return (
    <div className={classes.cartItem}>
      <img className={classes.itemImage} src={cartItem.image} alt={cartItem.name}></img>
      <p className={classes.itemName}>{cartItem.name}</p>
      <p className={classes.itemPrice}>
        {(
          parseFloat(cartItem["purchase_price"]) *
          cartItem.quantity
        ).toLocaleString("en-US", { style: "currency", currency: "USD" })}
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
