import { SET_CONNECTION } from "../constants/actionTypes.js"

const reducer = (connection = "disconnected", action) => {
  switch (action.type) {
    case SET_CONNECTION:
      return action.payload
    default:
      return connection
  }
}

export default reducer
