import * as api from "../api/index.js"
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  SET_KEY,
  SET_GROCERY_CONNECTION,
  FETCH_COUNT,
  RESET_REDUCER,
} from "../constants/actionTypes.js"

// action creators
export const getGroceries = (key, offset=0) => async (dispatch) => {
  try {
    dispatch({ type: SET_GROCERY_CONNECTION, payload: "pending" })

    const { data } = await api.fetchGroceries({ key }, { offset })
    
    // Save the key that worked
    dispatch({ type: SET_KEY, payload: key })

    // Start grouping the data
    let grouped = [data[0]]

    for (let i = 1; i < data.length; i++) {
      // Go through grouped and find the alphabetic place for this
      for (let a = 0; a < grouped.length; a++) {
        if (a === grouped.length - 1) {
          grouped.push(data[i])
          break
        } else if (data[i].category === grouped[a].category) {
          grouped.splice(a, 0, data[i])
          break
        } else if (data[i].category < grouped[a].category) {
          grouped.splice(a, 0, data[i])
          break
        }
      }
    }

    dispatch({ type: FETCH_ALL, payload: grouped })
    localStorage.setItem("groceryAuthKey", key)
    dispatch({ type: SET_GROCERY_CONNECTION, payload: "connected" })

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ key })
    dispatch({ type: FETCH_COUNT, payload: count })
  } catch (error) {
    dispatch({ type: SET_KEY, payload: null })
    dispatch({ type: SET_GROCERY_CONNECTION, payload: "disconnected" })
    console.log(error.message)
  }
}

export const createGrocery = (key, newGrocery) => async (dispatch) => {
  try {
    const { data } = await api.createGrocery({ key }, newGrocery)

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ key })
    dispatch({ type: FETCH_COUNT, payload: count })

    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updateGrocery = (key, groceryItem) => async (dispatch) => {
  try {
    const { data } = await api.updateGrocery({ key }, groceryItem)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteGrocery = (key, id) => async (dispatch) => {
  try {
    await api.deleteGrocery({ key }, id)

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ key })
    dispatch({ type: FETCH_COUNT, payload: count })
    
    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}

export const clearGroceries = (key) => async (dispatch) => {
  try {
    await api.deleteAllGroceries({ key })

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ key })
    dispatch({ type: FETCH_COUNT, payload: count })
    
    dispatch({ type: RESET_REDUCER, payload: [] })
  } catch (error) {
    console.log(error.message)
  }
}
