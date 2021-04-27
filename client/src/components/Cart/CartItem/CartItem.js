import React from "react"
import {
  fetchCart,
  updateCartItem,
  deleteCartItem,
} from "../../../actions/cart"
import { useSelector, useDispatch } from "react-redux"
import useStyles from "./styles.js"

const CartItem = ({ cartItem }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const authKey = useSelector((state) => state.authentication)

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(deleteCartItem(authKey, item._id))
    } else {
      const updatedQuantity = {
        ...item,
        quantity: item.quantity - 1,
      }
      dispatch(updateCartItem(authKey, updatedQuantity))
    }
  }

  const handleIncrement = (item) => {
    const updatedQuantity = {
      ...item,
      quantity: item.quantity + 1,
    }
    dispatch(updateCartItem(authKey, updatedQuantity))
    dispatch(fetchCart(authKey))
  }

  return (
    <div className={classes.cartItem}>
      <p className={classes.itemName}>{cartItem.name}</p>
      <p className={classes.itemPrice}>
        {(
          parseFloat(cartItem["purchase_price"]) *
          cartItem.quantity
        ).toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
      <div className={classes.btn} onClick={() => handleIncrement(cartItem)}>
        +
      </div>
      <p className={classes.itemCount}>{cartItem.quantity}</p>
      <div className={classes.btn} onClick={() => handleDecrement(cartItem)}>
        -
      </div>
    </div>
  )
}

export default CartItem
