import { SET_ID } from "../constants/actionTypes.js"

const reducer = (selectedCategory = null, action) => {
  switch (action.type) {
    case SET_ID:
      return action.payload
    default:
      return selectedCategory
  }
}

export default reducer
