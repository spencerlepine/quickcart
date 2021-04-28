import * as api from "../api/index.js"
import { FETCH_RECCOMENDED } from "../constants/actionTypes.js"

// action creators
export const fetchRecommended = (key) => async (dispatch) => {
  try {
    const { data } = await api.fetchRecommended({ key })

    dispatch({ type: FETCH_RECCOMENDED, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
