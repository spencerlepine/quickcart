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
      <div className={classes.imageContainer}>
        <img className={classes.itemImage} src={cartItem.image} alt={cartItem.name}></img>
      </div>
      <div className={classes.itemInfo}>
        <p className={classes.itemName}>{cartItem.name}</p>
        <p className={classes.itemSize}>
          ({cartItem.unit_size})
          <span className={classes.itemPrice}>
            {' - ' + itemPrice}
          </span>
        </p>
      </div>

      <div className={`${classes.btn} ${classes.deleteBtn}`} onClick={() => handleDecrement(cartItem)}>
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
