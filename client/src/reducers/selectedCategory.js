import { SET_SELECTED_CATEGORY, RESET_REDUCER } from "../constants/actionTypes.js"

const initialState = null

const reducer = (selectedItem = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
      return action.payload
    case RESET_REDUCER:
        return initialState
    default:
      return selectedItem
  }
}

export default reducer
