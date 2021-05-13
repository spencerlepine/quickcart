import { FETCH_COUNT, RESET_REDUCER } from "../constants/actionTypes.js"

const initialState = 1

const reducer = (totalGroceryCount = 1, action) => {
  switch (action.type) {
    case FETCH_COUNT:
      return action.payload
    case RESET_REDUCER:
      return initialState
    default:
      return totalGroceryCount
  }
}

export default reducer
