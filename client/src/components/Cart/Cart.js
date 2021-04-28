import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCart } from "../../actions/cart"

import CartHeader from "./CartHeader/CartHeader"
import CartItem from "./CartItem/CartItem"
import useStyles from "./styles.js"
import FoodCard from "../FoodCard/FoodCard"
import EmptyPrompt from "../EmptyPrompt/EmptyPrompt"
import cartImg from "../../images/cart.svg"

const Cart = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const authKey = useSelector((state) => state.authentication)
  const cartItems = useSelector((state) => state.cart)
  const reccomendedItems = useSelector((state) => state.reccomended)

  const reccomendedCards = []
  let keyCount = 0
  for (const prop in reccomendedItems) {
    reccomendedCards.push(...reccomendedItems[prop].map((item, i) => <FoodCard key={keyCount + i} groceryItem={item} />))
    keyCount += reccomendedItems[prop].length
  }

  useEffect(() => {
    dispatch(fetchCart(authKey))
  }, [dispatch])

  return (
    <div className={classes.cartView}>
      {!cartItems.length ? (
        <EmptyPrompt
          image={cartImg}
          message="Your cart is empty"
          destination="/"
          buttonText="Browse Items"
          addFilter
        />
      ) : (
        <>
          <CartHeader cartItems={cartItems} />
          <div className={classes.userCart}>
            {cartItems !== null &&
              cartItems.map((item, i) => <CartItem key={i} cartItem={item} />)}
          </div>
        </>
      )}

      {reccomendedCards.length > 0 && (
        <>
          <h3>Recommended</h3>
          <hr />
          <div className={classes.itemsGrid}>{reccomendedCards}</div>
        </>
      )}
    </div>
  )
}

export default Cart
