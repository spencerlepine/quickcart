import { SET_CURRENT_ERROR } from "../constants/actionTypes.js"

export const setError = (errorTitle, newError, errorType)  => async (dispatch) => {
  try {
    const errorObj = {
      message: newError,
      type: errorType,
      title: errorTitle,
    }

    await dispatch({ type: SET_CURRENT_ERROR, payload: errorObj })
  } catch (error) {
    console.log(error.message)
  }
}
