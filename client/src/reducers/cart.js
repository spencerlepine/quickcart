import {
  FETCH_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM,
} from "../constants/actionTypes.js"

const reducer = (cartItems = [], action) => {
  switch (action.type) {
    case FETCH_CART:
      return action.payload
    case ADD_TO_CART: {
      return [...cartItems, action.payload]
    }
    case UPDATE_ITEM: {
      let newCart = cartItems.map((item) =>
        item._id === action.payload._id ? action.payload : item
      )
      return newCart
    }
    case REMOVE_FROM_CART: {
      let newCart = cartItems.filter((item) => item._id !== action.payload)
      return newCart
    }
    default:
      return cartItems
  }
}

export default reducer
