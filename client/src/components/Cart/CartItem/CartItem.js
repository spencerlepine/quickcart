import React from "react"
import {
  fetchCart,
  updateCartItem,
  deleteCartItem,
} from "../../../actions/cart"
import { fetchRecommended } from "../../../actions/recommended"
import { useSelector, useDispatch } from "react-redux"
import useStyles from "./styles.js"

const CartItem = ({ cartItem }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const userId = useSelector(state => state.connectedUser)

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(deleteCartItem(userId, item.name))
    } else {
      const updatedQuantity = {
        ...item,
        quantity: item.quantity - 1,
      }
      dispatch(fetchRecommended(userId))
      dispatch(updateCartItem(userId, updatedQuantity))
    }
  }

  const handleIncrement = (item) => {
    const updatedQuantity = {
      ...item,
      quantity: item.quantity + 1,
    }
    dispatch(updateCartItem(userId, updatedQuantity))
    dispatch(fetchRecommended(userId))
    dispatch(fetchCart(userId))
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
