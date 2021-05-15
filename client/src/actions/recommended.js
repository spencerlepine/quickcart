import * as api from "../api/index.js"
import { FETCH_RECOMENDED_IDS, SET_RECOMMENDED_CONNECTION, SET_CURRENT_ERROR } from "../constants/actionTypes.js"

// action creators
export const fetchRecommended = (userId) => async (dispatch) => {
  try {
    dispatch({ type: SET_RECOMMENDED_CONNECTION, payload: "pending" })
   
    const { data } = await api.fetchRecommended({ userId })

    dispatch({ type: FETCH_RECOMENDED_IDS, payload: data })
    dispatch({ type: SET_RECOMMENDED_CONNECTION, payload: "connected" })
  } catch (error) {
    dispatch({ type: SET_RECOMMENDED_CONNECTION, payload: "disconnected" })
    dispatch({ type: SET_CURRENT_ERROR, payload: error.message })
    console.log(error.message)
  }
}
