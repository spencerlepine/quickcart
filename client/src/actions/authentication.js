import { SET_KEY } from "../constants/actionTypes.js"

// action creators
export const setAuthKey = (newKey) => async (dispatch) => {
  try {
    dispatch({ type: SET_KEY, payload: newKey })
  } catch (error) {
    console.log(error.message)
  }
}
