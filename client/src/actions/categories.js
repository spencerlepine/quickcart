import * as api from "../api/index.js"
import {
  FETCH_CATEGORIES,
  SET_CURRENT_ERROR,
  ADD_CATEGORY,
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

export const createNewCategory = (userId, newCategory) => async (dispatch) => {
  try {
    await api.createCategory({ userId }, { newCategory })

    dispatch({ type: ADD_CATEGORY, payload: newCategory })
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message)
  }
}