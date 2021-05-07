import { FETCH_RECOMENDED, RESET_REDUCER } from "../constants/actionTypes.js"

const initialState = {}

const reducer = (reccomended = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMENDED:
      return action.payload
    case RESET_REDUCER:
      return initialState
    default:
      return reccomended
  }
}

export default reducer
