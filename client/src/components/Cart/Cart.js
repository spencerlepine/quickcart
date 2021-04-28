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
  const recommendedItems = useSelector((state) => state.recommended)

  const recommendedCards = []
  let keyCount = 0
  for (const prop in recommendedItems) {
    recommendedCards.push(...recommendedItems[prop].map((item, i) => <FoodCard key={keyCount + i} groceryItem={item} />))
    keyCount += recommendedItems[prop].length
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

      {recommendedCards.length > 0 && (
        <>
          <h3>Recommended</h3>
          <hr />
          <div className={classes.itemsGrid}>{recommendedCards}</div>
        </>
      )}
    </div>
  )
}

export default Cart
