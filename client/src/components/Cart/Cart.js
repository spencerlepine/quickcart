import React from "react"
import { useSelector, useDispatch } from "react-redux"
import CartItem from "./CartItem/CartItem"
//import { useHistory } from "react-router-dom"
// import { createGrocery } from "../../actions/groceries"
// import { setId } from "../../actions/selectedItem"
// import { updateGrocery } from "../../actions/groceries"
import useStyles from "./styles.js"

const Cart = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const cartItems = useSelector((state) => state.cart)

    let totalCost = 0
    cartItems.forEach((item) => totalCost += item.quantity * parseFloat(item.purchase_price['$numberDecimal']))


    return (
        <div className={classes.cartView}>
            <p>Total: {totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
            {cartItems.map((item, i) => <CartItem item={item} />)}
        </div>
    )
}

export default Cart