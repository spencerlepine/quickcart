import { SET_CURRENT_ERROR, RESET_REDUCER } from "../constants/actionTypes.js"

const initialState = ""

const reducer = (currentError = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ERROR:
      return action.payload
    case RESET_REDUCER:
      return initialState
    default:
      return currentError
  }
}

export default reducer
