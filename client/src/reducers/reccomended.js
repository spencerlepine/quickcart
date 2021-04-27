import { FETCH_RECCOMENDED } from "../constants/actionTypes.js"

const reducer = (reccomended = [], action) => {
  switch (action.type) {
    case FETCH_RECCOMENDED:
      return action.payload
    default:
      return reccomended
  }
}

export default reducer
