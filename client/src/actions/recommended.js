import * as api from "../api/index.js"
import { FETCH_RECOMENDED } from "../constants/actionTypes.js"

// action creators
export const fetchRecommended = (key) => async (dispatch) => {
  try {
    const { data } = await api.fetchRecommended({ key })

    dispatch({ type: FETCH_RECOMENDED, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
