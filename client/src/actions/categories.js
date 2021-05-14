import * as api from "../api/index.js"
import {
  FETCH_CATEGORIES,
} from "../constants/actionTypes.js"

// action creators
export const fetchCategories = (userId) => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories({ userId })
    console.log(data)
    dispatch({ type: FETCH_CATEGORIES, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}