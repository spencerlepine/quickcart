import { SET_SELECTED_CATEGORY } from "../constants/actionTypes.js";

// action creators
export const setSelectedCategory = (newCategory) => async (dispatch) => {
  try {
    dispatch({ type: SET_SELECTED_CATEGORY, payload: newCategory });
  } catch (error) {
    console.log(error.message);
  }
};
