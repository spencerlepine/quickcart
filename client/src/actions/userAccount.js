import * as api from "../api/index.js";
import { SET_AUTHENTICATION_ID } from "../constants/actionTypes.js"

// action creators
export const signupUser = (email, password) => async (dispatch) => {
  try {
    const { data: userId } = api.registerUser({ email, password })
    
    dispatch({ type: SET_AUTHENTICATION_ID, payload: userId })
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const { data: userId } = await api.loginUser({ email, password });  

    dispatch({ type: SET_AUTHENTICATION_ID, payload: userId })
  } catch (error) {
    console.log(error.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const { status } = await api.logoutUser();
    const logoutSuccess = !(status === 200)
    
  } catch (error) {
    console.log(error.message);
  }
};

export const isLoggedIn = () => async (dispatch) => {
  try {
    const { data: userLoggedIn } = await api.isUserLoggedIn();

  } catch (error) {
    console.log(error.message);
  }
};