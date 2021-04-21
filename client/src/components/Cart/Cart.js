import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from "./CartItem/CartItem"
import useStyles from "./styles.js"

const Cart = () => {
    const classes = useStyles()
    const cartItems = useSelector((state) => state.cart)

    let totalCost = cartItems.reduce((total, item) => total += item.quantity * parseFloat(item.purchase_price['$numberDecimal']), 0)
    
    return (
        <div className={classes.cartView}>
            <div className={classes.cartHeader}>
                <Link to="/"><h2>MORE</h2></Link>
                <h4 className={classes.total}>{totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h4>
                <hr />
            </div>
            {cartItems !== null && cartItems.map((item, i) => <CartItem key={i} item={item} />)}
        </div>
    )
}

export default Cart