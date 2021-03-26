import { UPDATE_SEARCH } from "../constants/actionTypes.js"

// action creators
export const setSearchQuery = (newSearchQuery) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_SEARCH, payload: newSearchQuery })
    } catch (error) {
        console.log(error.message)
    }
}