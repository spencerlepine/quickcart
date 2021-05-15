import * as api from "../api/index.js";
import { RESET_REDUCER, SET_AUTHENTICATION_ID, SET_CURRENT_ERROR } from "../constants/actionTypes.js"

// action creators
export const signupUser = (email, password) => async (dispatch) => {
  try {
    const { data: userId } = api.registerUser({ email, password })
    
    dispatch({ type: SET_AUTHENTICATION_ID, payload: userId })
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const { data: userId } = await api.loginUser({ email, password });  

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
      dispatch({ type: SET_AUTHENTICATION_ID, payload: storedId })
    }
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error })
    console.log(error.message);
  }
};