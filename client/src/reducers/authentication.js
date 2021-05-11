import { SET_KEY, RESET_REDUCER } from "../constants/actionTypes.js"

const initialState = null

const reducer = (authenticationKey = initialState, action) => {
  switch (action.type) {
    case SET_KEY:
      let newKey = action.payload
      if (localStorage.getItem('groceryAuthKey') !== newKey) {
        localStorage.setItem('groceryAuthKey', newKey)
      }

      return newKey
    case RESET_REDUCER:
      return initialState
    default:
      return authenticationKey
  }
}

export default reducer
