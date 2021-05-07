import { UPDATE_SEARCH, RESET_REDUCER } from "../constants/actionTypes"

const initialState = ""

const reducer = (searchQuery = "", action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload
    case RESET_REDUCER: 
      return initialState
    default:
      return searchQuery
  }
}

export default reducer
