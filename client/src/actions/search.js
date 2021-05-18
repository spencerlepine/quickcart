import { UPDATE_SEARCH, SET_CURRENT_ERROR } from "../constants/actionTypes.js"

// action creators
export const setSearchQuery = (newSearchQuery) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_SEARCH, payload: newSearchQuery })
    } catch (error) {
        dispatch({ type: SET_CURRENT_ERROR, payload: error })
        console.log(error.message)
    }
}