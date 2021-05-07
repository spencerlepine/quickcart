import { FETCH_CATEGORIES, RESET_REDUCER } from "../constants/actionTypes.js"

const initialState = []
const reducer = (categories = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload
    case RESET_REDUCER:
      return initialState
    default:
      return categories
  }
}

export default reducer