import { FETCH_RECOMENDED_IDS, RESET_REDUCER } from "../constants/actionTypes.js"

const initialState = []

const reducer = (recommended = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMENDED_IDS:
      // Object 'category': [{ name: "Mango"}, { name: "Banana"}]
      const recommendedResult = action.payload
      const suggestedGroceryNames = []

      if (typeof recommendedResult === "object" && !Array.isArray(recommendedResult)) {
        for (const categoryKey in recommendedResult) {
          let categoryItemsArr = recommendedResult[categoryKey]
          categoryItemsArr.forEach(item => {
            suggestedGroceryNames.push(item.name)
          })
        }
      }

      return suggestedGroceryNames
    case RESET_REDUCER:
      return initialState
    default:
      return recommended
  }
}

export default reducer
