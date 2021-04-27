import { FETCH_CATEGORIES } from "../constants/actionTypes.js"

const reducer = (categories = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload
    default:
      return categories
  }
}

export default reducer