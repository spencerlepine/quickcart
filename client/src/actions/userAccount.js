// import { RESET_REDUCER, SET_KEY } from "../constants/actionTypes.js"
import * as api from "../api/index.js";
import { FETCH_ALL_GROCERIES, SET_AUTH_STATUS } from "../constants/actionTypes.js";

// action creators
export const registerUser = () => async (dispatch) => {
  try {
    // router.post('/', registerUser)
    // const { data: userLoggedIn } = await api.isUserLoggedIn();
    // alert(userLoggedIn);
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUser = (loginInfoObj) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(loginInfoObj);

    dispatch({ type: SET_AUTH_STATUS, payload: data })    
  } catch (error) {
    console.log(error.message);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const { status } = await api.logoutUser();
    const logoutSuccess = !(status === 200)
    
    dispatch({ type: SET_AUTH_STATUS, payload: logoutSuccess })  
  } catch (error) {
    console.log(error.message);
  }
};

export const isLoggedIn = () => async (dispatch) => {
  try {
    const { data: userLoggedIn } = await api.isUserLoggedIn();

    dispatch({ type: SET_AUTH_STATUS, payload: userLoggedIn });
  } catch (error) {
    console.log(error.message);
  }
};
