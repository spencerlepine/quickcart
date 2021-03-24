import React from "react"
import { useSelector } from "react-redux"
import CartItem from "./CartItem/CartItem"
import useStyles from "./styles.js"

const Cart = () => {
    const classes = useStyles()
    const cartItems = useSelector((state) => state.cart)

    let totalCost = 0
    cartItems.forEach((item) => totalCost += item.quantity * parseFloat(item.purchase_price['$numberDecimal']))


    return (
        <div className={classes.cartView}>
            <h4 className={classes.total}>{totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h4>
            {cartItems.map((item, i) => <CartItem item={item} />)}
        </div>
    )
}

export default Cart