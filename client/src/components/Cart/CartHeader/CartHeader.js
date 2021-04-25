import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { removeFromCart } from "../../../actions/cart"
import { updateGrocery } from "../../../actions/groceries"
import useStyles from "./styles.js"

const todaysDate = new Date().toISOString().slice(0, 10)

const CartHeader = ({ cartItems }) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleCartPurchase = () => {
    if (cartItems.length) {
      cartItems.forEach((item) => {
        const updatedPurchaseDate = {
          ...item,
          last_purchased: todaysDate,
        }
        dispatch(removeFromCart(item._id))
        dispatch(updateGrocery(item["_id"], updatedPurchaseDate))
      })
      alert(`Updated ${cartItems.length} item(s)`)
    }
  }

  let totalCost = cartItems.reduce(
    (total, item) =>
      (total +=
        item.quantity * parseFloat(item.purchase_price["$numberDecimal"])),
    0
  )

  return (
    <div className={classes.cartHeader}>
      <button className={classes.orderButton} onClick={handleCartPurchase}>
        Place Order
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