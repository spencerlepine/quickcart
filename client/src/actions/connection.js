import { SET_GROCERY_CONNECTION, SET_CURRENT_ERROR } from "../constants/actionTypes.js";

// action creators
export const setGroceryConnection = (newConnection) => async (dispatch) => {
  try {
    dispatch({ type: SET_GROCERY_CONNECTION, payload: newConnection });
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error });
    console.log(error.message);
  }
};