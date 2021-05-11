import * as api from "../api/index.js"
import { FETCH_RECOMENDED_IDS, SET_RECOMMENDED_CONNECTION } from "../constants/actionTypes.js"

// action creators
export const fetchRecommended = (key) => async (dispatch) => {
  try {
    dispatch({ type: SET_RECOMMENDED_CONNECTION, payload: "pending" })
    const { data } = await api.fetchRecommended({ key })

    dispatch({ type: FETCH_RECOMENDED_IDS, payload: data })
    dispatch({ type: SET_RECOMMENDED_CONNECTION, payload: "connected" })
  } catch (error) {
    dispatch({ type: SET_RECOMMENDED_CONNECTION, payload: "disconnected" })
    console.log(error.message)
  }
}
