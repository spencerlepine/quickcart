import { FETCH_RECOMENDED, RESET_REDUCER, REMOVE_FROM_RECOMMENDED } from "../constants/actionTypes.js"

const initialState = {}

const reducer = (reccomended = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMENDED:
      return action.payload
    case RESET_REDUCER:
      return initialState
    case REMOVE_FROM_RECOMMENDED:
      let newRecommendations = {}
      for (const prop in reccomended) {
        newRecommendations[prop] = reccomended[prop].filter(item => item._id !== action.payload)
      }
      return newRecommendations
    default:
      return reccomended
  }
}

export default reducer
