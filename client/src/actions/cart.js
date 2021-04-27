import * as api from "../api/index.js"
import {
  FETCH_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM,
} from "../constants/actionTypes.js"

// action creators
export const fetchCart = (key) => async (dispatch) => {
  try {
    const { data } = await api.fetchCart({ key })

    dispatch({ type: FETCH_CART, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const addToCart = (key, itemToAdd) => async (dispatch) => {
  try {
    const result = await api.fetchCartItem({ key }, itemToAdd._id)

    if (result.data) {
      // This item is already in the cart, just update the quantity
      const updatedQuantity = {
        ...itemToAdd,
        quantity: itemToAdd.quantity + 1,
      }
      const { data } = await api.updateCartItem({ key }, updatedQuantity)

      dispatch({ type: UPDATE_ITEM, payload: data })
    } else {
      const { data } = await api.addToCart({ key }, itemToAdd)

      dispatch({ type: ADD_TO_CART, payload: data })
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteCartItem = (key, idToRemove) => async (dispatch) => {
  try {
    api.removeCartItem({ key }, idToRemove)

    dispatch({ type: REMOVE_FROM_CART, payload: idToRemove })
  } catch (error) {
    console.log(error.message)
  }
}

export const updateCartItem = (key, updatedItem) => async (dispatch) => {
  try {
    const { data } = await api.updateCartItem({ key }, updatedItem)

    dispatch({ type: UPDATE_ITEM, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
