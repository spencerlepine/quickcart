import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchReccomended } from "../../actions/reccomended"
import { removeFromCart } from "../../actions/cart"
import { updateGrocery } from "../../actions/groceries"

import { Link } from "react-router-dom"
import CartItem from "./CartItem/CartItem"
import useStyles from "./styles.js"
import FoodCard from "../FoodCard/FoodCard"
import cartImg from "../../images/cart.svg"
const todaysDate = new Date().toISOString().slice(0, 10)

const Cart = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const cartItems = useSelector((state) => state.cart)
    const reccomendedItems = useSelector((state) => state.reccomended)
    const reccomendedCards = reccomendedItems ? reccomendedItems.map((item, i) => <FoodCard key={i} groceryItem={item} />) : []

    useEffect(() => {
        dispatch(fetchReccomended())
    }, [dispatch])

    const handleCartPurchase = () => {
        if (cartItems.length) {
            cartItems.forEach(item => {
                const updatedPurchaseDate = {
                    ...item,
                    last_purchased: todaysDate
                }
                dispatch(removeFromCart(item._id))
                dispatch(updateGrocery(item["_id"], updatedPurchaseDate))
            })
            alert(`Updated ${cartItems.length} item(s)`)
        }
    }


    let totalCost = cartItems.reduce((total, item) => total += item.quantity * parseFloat(item.purchase_price['$numberDecimal']), 0)
    
    return (
        <div className={classes.cartView}>
            <div className={classes.cartHeader}>
                <button className={classes.orderButton} onClick={handleCartPurchase}>
                    Place Order
                </button>
                <h4 className={classes.total}>{totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h4>
            </div>
            {cartItems !== null && cartItems.map((item, i) => <CartItem key={i} item={item} />)}
            
            {!cartItems.length &&
                <div className={classes.emptyCart}>
                    <img className={classes.cart} src={cartImg} alt="cart"></img>
                    <p className={classes.emptyMessage}>Your cart is empty</p>
                    <span className={classes.browseButton}>
                        <Link to="/" className={classes.orderButton}>Browse Items</Link>
                    </span>
                </div>
            }
            
            <div className={classes.itemsGrid}>
                {reccomendedCards}
            </div>
        </div>
    )
}

export default Cart