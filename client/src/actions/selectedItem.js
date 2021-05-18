import { SET_ID, SET_CURRENT_ERROR } from "../constants/actionTypes.js";

// action creators
export const setId = (newId) => async (dispatch) => {
  try {
    dispatch({ type: SET_ID, payload: newId });
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message);
  }
};
