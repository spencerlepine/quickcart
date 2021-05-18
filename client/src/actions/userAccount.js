import * as api from "../api/index.js";
import { RESET_REDUCER, SET_AUTHENTICATION_ID, SET_CURRENT_ERROR } from "../constants/actionTypes.js"
import { fetchCart } from "./cart"
import { fetchRecommended } from "./recommended"
import { getGroceries } from "./groceries"

// action creators
export const signupUser = (email, password) => async (dispatch) => {
  try {
    const { data: userId } = api.registerUser({ email, password })
    await api.loginUser({ email, password });
    
    dispatch({ type: SET_AUTHENTICATION_ID, payload: userId })
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const { data: userId } = await api.loginUser({ email, password });  

    dispatch(fetchCart(userId))
    dispatch(getGroceries(userId))
    dispatch(fetchRecommended(userId))
    dispatch({ type: SET_AUTHENTICATION_ID, payload: userId })
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await api.logoutUser();

    dispatch({ type: RESET_REDUCER, payload: null })
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message);
  }
};

export const isLoggedIn = () => async (dispatch) => {
  try {
    const { data: userLoggedIn } = await api.isUserLoggedIn();

    const storedId = localStorage.getItem("groceryAppUserId")

    if (userLoggedIn) {
      dispatch(fetchCart(storedId))
      dispatch(getGroceries(storedId))
      dispatch(fetchRecommended(storedId))
      dispatch({ type: SET_AUTHENTICATION_ID, payload: storedId })
    }
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message);
  }
};