import { RESET_REDUCER, SET_AUTHENTICATION_ID } from "../constants/actionTypes.js";

const initialState = null

const reducer = (connectedUser = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION_ID:
      const storedId = action.payload
      if (!storedId) {
        localStorage.clear()
        return connectedUser
      } else {
        localStorage.setItem("groceryAppUserId", action.payload)
      }
      
      return action.payload;
    case RESET_REDUCER:
      localStorage.clear()
      return initialState
    default:
      return connectedUser;
  }
};

export default reducer;
