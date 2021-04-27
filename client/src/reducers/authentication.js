import { SET_KEY } from "../constants/actionTypes.js";

const reducer = (authenticationKey = null, action) => {
  switch (action.type) {
    case SET_KEY:
      return action.payload;
    default:
      return authenticationKey;
  }
};

export default reducer;
