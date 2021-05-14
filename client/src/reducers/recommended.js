import { FETCH_RECOMENDED_IDS, SET_RECOMMENDED, RESET_REDUCER, REMOVE_FROM_RECOMMENDED } from "../constants/actionTypes.js"

const initialState = []

const reducer = (recommended = initialState, action) => {
  switch (action.type) {
    case SET_RECOMMENDED:
      // Save ALL the groceries to this reducer
      return [...recommended, ...action.payload]
    case FETCH_RECOMENDED_IDS: {
      let recommendedCategories = action.payload 

      let validNames = []
      
      for (const categoryKey in recommendedCategories) {
        validNames.push(...recommendedCategories[categoryKey].map(itemObj => itemObj.name))
      }

      const newRecommendations = recommended.filter(itemObj =>
        validNames.includes(itemObj.name)
      )

      // What if the last one didn't have wraps, but this one has wraps? (the id won't be here)
      return newRecommendations
    } case RESET_REDUCER:
      return initialState
    case REMOVE_FROM_RECOMMENDED: {
      const newRecommednations = recommended.filter(item => item.name !== action.payload)
      return newRecommednations
    } default:
      return recommended
  }
}

export default reducer
