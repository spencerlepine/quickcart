import * as api from "../api/index.js"
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  CLEAR_ALL,
  SET_KEY,
  SET_CONNECTION,
} from "../constants/actionTypes.js"

// action creators
export const getGroceries = (key) => async (dispatch) => {
  try {
    dispatch({ type: SET_CONNECTION, payload: "pending" })

    const savedGroceries = JSON.parse(localStorage.getItem('groceryItems'))
    if (savedGroceries) {
      if (typeof savedGroceries === "object") {
        dispatch({ type: FETCH_ALL, payload: savedGroceries })
        dispatch({ type: SET_CONNECTION, payload: "local" })
        dispatch({ type: SET_KEY, payload: key })
      }
    }  

    const { data } = await api.fetchGroceries({ key })
    dispatch({ type: SET_KEY, payload: key })

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
    dispatch({ type: SET_CONNECTION, payload: "connected" })
  } catch (error) {
    dispatch({ type: SET_KEY, payload: null })
    dispatch({ type: SET_CONNECTION, payload: "disconnected" })
    console.log(error.message)
  }
}

export const createGrocery = (key, newGrocery) => async (dispatch) => {
  try {
    const { data } = await api.createGrocery({ key }, newGrocery)

    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updateGrocery = (key, id, groceryItem) => async (dispatch) => {
  try {
    const { data } = await api.updateGrocery({ key }, id, groceryItem)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteGrocery = (key, id) => async (dispatch) => {
  try {
    await api.deleteGrocery({ key }, id)

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}

export const clearGroceries = (key) => async (dispatch) => {
  try {
    await api.deleteAllGroceries({ key })

    dispatch({ type: CLEAR_ALL, payload: [] })
  } catch (error) {
    console.log(error.message)
  }
}
