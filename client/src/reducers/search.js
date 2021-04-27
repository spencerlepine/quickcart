import { UPDATE_SEARCH } from "../constants/actionTypes"

const reducer = (searchQuery = "", action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload
    default:
      return searchQuery
  }
}

export default reducer
