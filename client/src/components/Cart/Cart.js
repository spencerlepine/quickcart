import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import CartHeader from "./CartHeader/CartHeader"
import CartItem from "./CartItem/CartItem"
import useStyles from "./styles.js"
import EmptyPrompt from "../EmptyPrompt/EmptyPrompt"
import cartImg from "../../images/cart.svg"
import ReccomendedWidget from "../Recommended/RecommendedWidget/RecommendedWidget"
import CircularProgress from "@material-ui/core/CircularProgress"
import { fetchCart } from "../../actions/cart"

const Cart = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const userId = useSelector(state => state.connectedUser)
  const cartItems = useSelector((state) => state.cart)
  const { cart: connection } = useSelector((state) => state.connection)

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

  useEffect(() => {
    if (cartItems.length === 0) {
      dispatch(fetchCart(userId))
      return
    }
  }, [])

  return (
    <div className={classes.cartView}>
      {cartItems.length === 0 
        ?
      renderEmptyCart(connection)
        :
        <>
          <CartHeader cartItems={cartItems} />
          <div className={classes.userCart}>
            {cartItems !== null &&
              cartItems.map((item, i) => <CartItem key={i} cartItem={item} />)}
          </div>
        </>
      }

      <ReccomendedWidget />
    </div>
  )
}

export default Cart
