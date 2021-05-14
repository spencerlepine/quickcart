import * as api from "../api/index.js"
import {
  FETCH_ALL_GROCERIES,
  UPDATE,
  DELETE,
  SET_GROCERY_CONNECTION,
  FETCH_COUNT,
  RESET_REDUCER,
  SET_RECOMMENDED,
  FETCH_RECOMENDED_IDS
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

    dispatch({ type: SET_RECOMMENDED, payload: data })
    dispatch({ type: FETCH_RECOMENDED_IDS, payload: data })
    /*
    

    const { data } = await api.fetchGroceries({ id }, { offset })

    // Save the total count
    const { data: count } = await api.fetchGroceryCount({ id })
    dispatch({ type: FETCH_COUNT, payload: count })

    dispatch({ type: FETCH_ALL_GROCERIES, payload: data })
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

    // Save these to reccomended
    dispatch({ type: SET_RECOMMENDED, payload: data })
    const { data: recommendedIds } = await api.fetchRecommended({ key })
    dispatch({ type: FETCH_RECOMENDED_IDS, payload: recommendedIds })

    dispatch({ type: FETCH_ALL_GROCERIES, payload: grouped })
    dispatch({ type: SET_GROCERY_CONNECTION, payload: "connected" })

    // Save the total count
    // const { data: count } = await api.fetchGroceryCount({ key })
    // dispatch({ type: FETCH_COUNT, payload: count })*/
  } catch (error) {
    dispatch({ type: SET_GROCERY_CONNECTION, payload: "disconnected" })
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
    console.log(error.message)
  }
}

export const updateGrocery = (userId, groceryItem) => async (dispatch) => {
  try {
    await api.updateGrocery({ userId }, groceryItem)

    dispatch({ type: UPDATE, payload: groceryItem })
  } catch (error) {
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
    console.log(error.message)
  }
}
