import React from "react"
import { changeCartQuantity, removeFromCart } from "../../../actions/cart"
import { useDispatch } from "react-redux"
import useStyles from "./styles.js"

const CartItem = ({ item }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleDecrement = (item) => {
        if (item.quantity === 1) {
            dispatch(removeFromCart(item._id))
        } else {
            dispatch(changeCartQuantity(item, -1))
        }
    }

    return (
        <div className={classes.cartItem}>
            <p className={classes.itemName}>{item.name}</p>
            <p className={classes.itemPrice}>{(parseFloat(item.purchase_price["$numberDecimal"])*item.quantity).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
            <div className={classes.btn} onClick={() => dispatch(changeCartQuantity(item, 1))}>+</div>
            <p className={classes.itemCount}>{item.quantity}</p>
            {item.quantity > 1 ? <div className={classes.btn} onClick={() => handleDecrement(item)}>-</div> :
            <div className={classes.delete} onClick={() => dispatch(removeFromCart(item._id))}>🗑️</div>}
        </div>
    )
}

export default CartItem