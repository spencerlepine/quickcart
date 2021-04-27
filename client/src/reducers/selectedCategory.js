import { SET_SELECTED_CATEGORY } from "../constants/actionTypes.js"

const reducer = (selectedItem = null, action) => {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
      return action.payload
    default:
      return selectedItem
  }
}

export default reducer
