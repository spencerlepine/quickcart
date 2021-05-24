import { FETCH_CATEGORIES, RESET_REDUCER, ADD_CATEGORY } from "../constants/actionTypes.js"

const initialState = []
const reducer = (categories = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload
    case ADD_CATEGORY:
      return [...categories, action.payload]
    case RESET_REDUCER:
      return initialState
    default:
      return categories
  }
}

export default reducer