import * as api from "../api/index.js"
import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes.js"

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

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.updatePost(id, post)

//         dispatch({ type: UPDATE, payload: data })
//     } catch(error) {
//         console.log(error.message)
//     }
// }

// export const likePost = (id) => async (dispatch) => {
//     try {
//       const { data } = await api.likePost(id);
  
//       dispatch({ type: LIKE, payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
// };

// export const deletePost = (id) => async (dispatch) => {
//     try {
//         await api.deletePost(id)

//         dispatch({ type: DELETE, payload: id })
//     } catch(error) {
//         console.log(error.message)
//     }
// }