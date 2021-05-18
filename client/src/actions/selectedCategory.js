import { SET_SELECTED_CATEGORY, SET_CURRENT_ERROR } from "../constants/actionTypes.js";

// action creators
export const setSelectedCategory = (newCategory) => async (dispatch) => {
  try {
    dispatch({ type: SET_SELECTED_CATEGORY, payload: newCategory });
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message);
  }
};
