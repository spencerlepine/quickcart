import * as api from "../api/index.js"
import {
  FETCH_CATEGORIES,
  SET_CURRENT_ERROR,
} from "../constants/actionTypes.js"

// action creators
export const fetchCategories = (userId) => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories({ userId })

    dispatch({ type: FETCH_CATEGORIES, payload: data })
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}