import * as api from "../api/index.js"
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes.js"

// action creators
export const getGroceries = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGroceries()

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createGrocery = (newGrocery) => async (dispatch) => {
    try {
        const { data } = await api.createGrocery(newGrocery)

        dispatch({ type: CREATE, payload: data })
    } catch(error) {
        console.log(error.message)
    }
}

export const updateGrocery = (id, groceryItem) => async (dispatch) => {
    try {
        const { data } = await api.updateGrocery(id, groceryItem)

        dispatch({ type: UPDATE, payload: data })
    } catch(error) {
        console.log(error.message)
    }
}

export const deleteGrocery = (id) => async (dispatch) => {
    try {
        await api.deleteGrocery(id)

        dispatch({ type: DELETE, payload: id })
    } catch(error) {
        console.log(error.message)
    }
}