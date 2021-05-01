import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  CLEAR_ALL,
} from "../constants/actionTypes.js"

const reducer = (groceries = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      localStorage.setItem('groceryItems', JSON.stringify(action.payload))
      return action.payload
    case CREATE:
      return [...groceries, action.payload]
    case UPDATE:
      return groceries.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    case DELETE:
      return groceries.filter((post) => post._id !== action.payload)
    case CLEAR_ALL:
      return []
    default:
      return groceries
  }
}

export default reducer
