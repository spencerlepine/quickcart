import * as api from "../api/index.js"
import {
  FETCH_CATEGORIES,
} from "../constants/actionTypes.js"

// action creators
export const fetchCategories = (key) => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories({ key })

    dispatch({ type: FETCH_CATEGORIES, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}