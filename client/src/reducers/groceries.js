import {
  FETCH_ALL_GROCERIES,
  UPDATE,
  DELETE,
  RESET_REDUCER,
} from "../constants/actionTypes.js"

const initialState = []

const reducer = (groceries = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_GROCERIES:
      let existingIds = groceries.map(item => item["_id"])
      let filteredPayload = action.payload.filter(item => item && !(existingIds.includes(item["_id"])))
      let extendedGroceries = [...groceries, ...filteredPayload]
      return extendedGroceries
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
