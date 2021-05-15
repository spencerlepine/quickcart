import * as api from "../api/index.js"
import {
  FETCH_ALL_GROCERIES,
  UPDATE,
  DELETE,
  SET_GROCERY_CONNECTION,
  FETCH_COUNT,
  SET_CURRENT_ERROR,
} from "../constants/actionTypes.js"

// action creators
export const getGroceries = (userId, lastGrocery=0) => async (dispatch) => {
  try {
    dispatch({ type: SET_GROCERY_CONNECTION, payload: "pending" })

    const { data } = await api.fetchGroceries({ userId }, { lastGrocery })
 
    await dispatch({ type: FETCH_ALL_GROCERIES, payload: data })

    await dispatch({ type: SET_GROCERY_CONNECTION, payload: "connected" })

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ userId })
    dispatch({ type: FETCH_COUNT, payload: count })
  } catch (error) {
    dispatch({ type: SET_GROCERY_CONNECTION, payload: "disconnected" })
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}

export const createGrocery = (userId, newGrocery) => async (dispatch) => {
  try {
    await api.createGrocery({ userId }, newGrocery)

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ userId })
    dispatch({ type: FETCH_COUNT, payload: count })
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}

export const updateGrocery = (userId, groceryItem) => async (dispatch) => {
  try {
    await api.updateGrocery({ userId }, groceryItem)

    dispatch({ type: UPDATE, payload: groceryItem })
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}

export const deleteGrocery = (userId, groceryName) => async (dispatch) => {
  try {
    await api.deleteGrocery({ userId }, { name: groceryName })

    dispatch({ type: DELETE, payload: groceryName })

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ userId })
    dispatch({ type: FETCH_COUNT, payload: count })
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}
