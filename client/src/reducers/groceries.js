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
      let existingNames = groceries.map(item => item.name)
      let filteredPayload = action.payload.filter(item => item && !(existingNames.includes(item.name)))
      let extendedGroceries = [...groceries, ...filteredPayload]
      return extendedGroceries
    case UPDATE:
      return groceries.map((item) =>
      item.name === action.payload.name ? action.payload : item
      )
    case DELETE:
      return groceries.filter((item) => item.name !== action.payload)
    case RESET_REDUCER:
      return initialState  
    default:
      return groceries
  }
}

export default reducer
