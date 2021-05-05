import { FETCH_COUNT } from "../constants/actionTypes.js"

const reducer = (totalGroceryCount = {}, action) => {
  switch (action.type) {
    case FETCH_COUNT:
      return action.payload
    default:
      return totalGroceryCount
  }
}

export default reducer
