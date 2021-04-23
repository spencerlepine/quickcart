import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchReccomended } from "../../actions/reccomended"
import { Link } from "react-router-dom"
import CartItem from "./CartItem/CartItem"
import useStyles from "./styles.js"
import FoodCard from "../FoodCard/FoodCard"

const Cart = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const cartItems = useSelector((state) => state.cart)
    const reccomendedItems = useSelector((state) => state.reccomended)
    const reccomendedCards = reccomendedItems ? reccomendedItems.map((item, i) => <FoodCard key={i} groceryItem={item} />) : []

    useEffect(() => {
        dispatch(fetchReccomended())
    }, [dispatch])

    let totalCost = cartItems.reduce((total, item) => total += item.quantity * parseFloat(item.purchase_price['$numberDecimal']), 0)
    
    return (
        <div className={classes.cartView}>
            <div className={classes.itemsGrid}>
                {reccomendedCards}
            </div>
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