import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  RESET_REDUCER,
} from "../constants/actionTypes.js"

const initialState = []

const reducer = (groceries = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      let filteredPayload = action.payload.filter(item => item)
      let extendedGroceries = [...groceries, ...filteredPayload]
      return extendedGroceries
    case CREATE:
      return [...groceries, action.payload]
    case UPDATE:
      return groceries.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    case DELETE:
      return groceries.filter((post) => post._id !== action.payload)
    case RESET_REDUCER:
      return initialState  
    default:
      return groceries
  }
}

export default reducer
