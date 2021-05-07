import { SET_KEY, RESET_REDUCER } from "../constants/actionTypes.js"

const initialState = null

const reducer = (authenticationKey = initialState, action) => {
  switch (action.type) {
    case SET_KEY:
      return action.payload
    case RESET_REDUCER:
      return initialState
    default:
      return authenticationKey
  }
}

export default reducer
