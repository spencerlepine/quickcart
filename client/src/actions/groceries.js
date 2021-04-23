import * as api from "../api/index.js"
import { FETCH_ALL, CREATE, UPDATE, DELETE, CLEAR_ALL } from "../constants/actionTypes.js"

// action creators
export const getGroceries = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGroceries()

        let grouped = [data[0]]
    
        for (let i = 1; i < data.length; i++) {
            // Go through grouped and find the alphabetic place for this
            for (let a = 0; a < grouped.length; a++) {
                if (a === grouped.length - 1) {
                    grouped.push(data[i])
                    break
                } else if (data[i].category === grouped[a].category) {
                    grouped.splice(a, 0, data[i])
                    break
                } else if (data[i].category < grouped[a].category) {
                    grouped.splice(a, 0, data[i])
                    break
                }
            }
        }

        dispatch({ type: FETCH_ALL, payload: grouped })
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

export const clearGroceries = () => async (dispatch) => {
    try {
        await api.deleteAll()

        dispatch({ type: CLEAR_ALL, payload: [] })
    } catch(error) {
        console.log(error.message)
    }
}