import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchReccomended } from "../../actions/reccomended"

import CartHeader from "./CartHeader/CartHeader"
import EmptyCart from "./EmptyCart/EmptyCart"
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

    return (
        <div className={classes.cartView}>
            {!cartItems.length
                ?
            <EmptyCart />
                :
            <>
                <CartHeader cartItems={cartItems} />
                <div className={classes.userCart}>
                    {cartItems !== null && cartItems.map((item, i) => <CartItem key={i} item={item} />)}
                </div>
            </>}
            
            <h3>Reccommended</h3>
            <hr />
            <div className={classes.itemsGrid}>
                {reccomendedCards}
            </div>
        </div>
    )
}

export default Cart