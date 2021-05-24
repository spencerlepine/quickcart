import React from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { deleteCartItem } from "../../../actions/cart"
import { updateGrocery } from "../../../actions/groceries"
import { SET_CURRENT_ERROR } from "../../../constants/actionTypes.js"
import useStyles from "./styles.js"

const todaysDate = new Date().toISOString().slice(0, 10)

const CartHeader = ({ cartItems }) => {
  const dispatch = useDispatch()
  const classes = useStyles()

 const userId = useSelector(state => state.connectedUser)
 
  const handleCartPurchase = () => {
    if (cartItems.length) {
      cartItems.forEach((item) => {
        const groceryObjNewDate = {
          ...item,
          last_purchased: todaysDate,
        }
        dispatch(deleteCartItem(userId, groceryObjNewDate.name))
        dispatch(updateGrocery(userId, groceryObjNewDate))
      })
      const purchaseMessage = {
        name: "Update complete!",
        message: `Saved new grocery dates`,
        type: "success"
      }
      dispatch({ type: SET_CURRENT_ERROR, payload: purchaseMessage }) 
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

CartHeader.propTypes = {
  cartItems: PropTypes.array,
}

export default CartHeader
