import { FETCH_RECOMENDED_IDS, RESET_REDUCER } from "../constants/actionTypes.js"

const initialState = []

const reducer = (recommended = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMENDED_IDS:
      const recommendedResult = action.payload
      const suggestedGroceryNames = []

      if (typeof recommendedResult === "object" && !Array.isArray(recommendedResult)) {
        for (const categoryKey in recommendedResult) {
          suggestedGroceryNames.push(...recommendedResult[categoryKey].map(itemObj => itemObj.name))
        }
      } else {
        return recommendedResult
      }

      return suggestedGroceryNames
    case RESET_REDUCER:
      return initialState
    default:
      return recommended
  }
}

export default reducer
