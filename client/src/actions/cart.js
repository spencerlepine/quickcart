import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from "../constants/actionTypes.js"

// action creators
export const addToCart = (itemToAdd) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART, payload: itemToAdd })
    } catch (error) {
        console.log(error.message)
    }
}

export const removeFromCart = (idToRemove) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_FROM_CART, payload: idToRemove })
    } catch (error) {
        console.log(error.message)
    }
}

export const changeCartQuantity = (itemToUpdate, change) => async (dispatch) => {
    const updatedCartItem = {...itemToUpdate, quantity: itemToUpdate.quantity + change}

    try {
        dispatch({ type: CHANGE_QUANTITY, payload: updatedCartItem })
    } catch (error) {
        console.log(error.message)
    }
}