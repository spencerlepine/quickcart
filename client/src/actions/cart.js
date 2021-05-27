import * as api from "../api/index.js";
import {
  FETCH_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM,
  SET_CART_CONNECTION,
  SET_CURRENT_ERROR,
} from "../constants/actionTypes.js";

// action creators
export const fetchCart = (userId) => async (dispatch) => {
  try {
    dispatch({ type: SET_CART_CONNECTION, payload: "pending" });
    const { data } = await api.fetchCart({ userId });

    dispatch({ type: FETCH_CART, payload: data });
    dispatch({ type: SET_CART_CONNECTION, payload: "connected" });
  } catch (error) {
    dispatch({ type: SET_CART_CONNECTION, payload: "disconnected" });
    dispatch({ type: SET_CURRENT_ERROR, payload: error });
    console.log(error.message);
  }
};

export const addToCart = (userId, itemToAdd) => async (dispatch) => {
  try {
    const { data } = await api.addToCart({ userId }, itemToAdd);
    dispatch({ type: ADD_TO_CART, payload: data });

    const successMessage = {
      name: "Success!",
      message: `added ${itemToAdd.name} to cart`,
      type: "success",
    };
    dispatch({ type: SET_CURRENT_ERROR, payload: successMessage });
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error });
    console.log(error.message);
  }
};

export const deleteCartItem = (userId, nameToRemove) => async (dispatch) => {
  try {
    await api.removeCartItem({ userId }, { name: nameToRemove });

    dispatch({ type: REMOVE_FROM_CART, payload: nameToRemove });
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error });
    console.log(error.message);
  }
};

export const updateCartItem = (userId, updatedItem) => async (dispatch) => {
  try {
    const { data } = await api.updateCartItem({ userId }, updatedItem);

    dispatch({ type: UPDATE_ITEM, payload: data });
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error });
    console.log(error.message);
  }
};

export const logCartItem = (userId, itemToLog) => async (dispatch) => {
  try {
    await api.logCartItem({ userId }, itemToLog);
  } catch (error) {
    dispatch({ type: SET_CURRENT_ERROR, payload: error });
    console.log(error.message);
  }
};