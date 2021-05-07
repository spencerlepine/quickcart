import { RESET_REDUCER, SET_KEY } from "../constants/actionTypes.js"

// action creators
export const setAuthKey = (newKey) => async (dispatch) => {
  try {
    dispatch({ type: SET_KEY, payload: newKey })
  } catch (error) {
    console.log(error.message)
  }
}

export const resetLogin = () => async (dispatch) => {
  try {
    dispatch({ type: RESET_REDUCER })
  } catch (error) {
    console.log(error.message)
  }
}
