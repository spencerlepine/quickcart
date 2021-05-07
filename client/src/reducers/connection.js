import { SET_GROCERY_CONNECTION, SET_CART_CONNECTION, SET_RECOMMENDED_CONNECTION, RESET_REDUCER } from "../constants/actionTypes.js"

let startConnection = {
  groceries: "disconnected",
  cart: "disconnected",
  recommended: "disconnected",
}

const reducer = (connection = startConnection, action) => {
  switch (action.type) {
    case SET_GROCERY_CONNECTION: {
      let newConnection = {
        ...connection,
        groceries: action.payload
      }
      return newConnection
    } case SET_CART_CONNECTION: {
      let newConnection = {
        ...connection,
        cart: action.payload
      }
      return newConnection
    } case SET_RECOMMENDED_CONNECTION: {
      let newConnection = {
        ...connection,
        recommended: action.payload
      }
      return newConnection
    } case RESET_REDUCER:
      return startConnection
    default:
      return connection
  }
}

export default reducer
