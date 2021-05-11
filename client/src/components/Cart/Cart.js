import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCart } from "../../actions/cart"

import CartHeader from "./CartHeader/CartHeader"
import CartItem from "./CartItem/CartItem"
import useStyles from "./styles.js"
import FoodCard from "../FoodCard/FoodCard"
import EmptyPrompt from "../EmptyPrompt/EmptyPrompt"
import cartImg from "../../images/cart.svg"
import ReccomendedWidget from "../Recommended/RecommendedWidget/RecommendedWidget"
import CircularProgress from "@material-ui/core/CircularProgress"

const Cart = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const authKey = useSelector((state) => state.authentication)
  const cartItems = useSelector((state) => state.cart)
  const connection = useSelector((state) => state.connection.cart)

  useEffect(() => {
    dispatch(fetchCart(authKey))
  }, [dispatch])

  const renderEmptyCart = (currentConnection) => {
    if (currentConnection === "connected") {
      return (
        <EmptyPrompt
          image={cartImg}
          message="Your cart is empty"
          destination="/"
          buttonText="Browse Items"
          addFilter
        />
      )
    } else {
      return (<CircularProgress />)
    }
  }

  return (
    <div className={classes.cartView}>
      {cartItems.length === 0 && renderEmptyCart(connection)}


      {cartItems.length > 0 && (
        <>
          <CartHeader cartItems={cartItems} />
          <div className={classes.userCart}>
            {cartItems !== null &&
              cartItems.map((item, i) => <CartItem key={i} cartItem={item} />)}
          </div>
        </>
      )}

      <ReccomendedWidget />
    </div>
  )
}

export default Cart
