import { SET_AUTH_STATUS, RESET_REDUCER } from "../constants/actionTypes.js"

const initialState = null

const reducer = (authStatus = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return action.payload
    case RESET_REDUCER:
      return initialState
    default:
      return authStatus
  }
}

export default reducer
