import { RESET_REDUCER, SET_ID } from "../constants/actionTypes.js"

const initialState = null

const reducer = (selectedCategory = initialState, action) => {
  switch (action.type) {
    case SET_ID:
      return action.payload
    case RESET_REDUCER:
      return initialState
    default:
      return selectedCategory
  }
}

export default reducer
