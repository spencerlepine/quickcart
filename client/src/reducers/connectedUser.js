import { SET_AUTHENTICATION_ID } from "../constants/actionTypes.js";

const initialState = null;

const reducer = (connectedUser = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION_ID:
      return action.payload;
    default:
      return connectedUser;
  }
};

export default reducer;
