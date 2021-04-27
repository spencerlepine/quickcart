import { SET_ID } from "../constants/actionTypes.js";

// action creators
export const setId = (newId) => async (dispatch) => {
  try {
    dispatch({ type: SET_ID, payload: newId });
  } catch (error) {
    console.log(error.message);
  }
};
