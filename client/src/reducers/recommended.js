import { FETCH_RECOMENDED } from "../constants/actionTypes.js"

const reducer = (reccomended = {}, action) => {
  switch (action.type) {
    case FETCH_RECOMENDED:
      return action.payload
    default:
      return reccomended
  }
}

export default reducer
