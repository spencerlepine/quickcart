import axios from "axios"
const baseUrl = 'http://localhost:5000'
// const baseUrl = "https://grocery-server-sl.herokuapp.com"
const url = baseUrl + "/groceries"

export const fetchGroceries = (keyObj) => axios.get(`${url}/${keyObj.key}`)

export const fetchCart = (keyObj) => axios.get(`${baseUrl}/cart/${keyObj.key}`)

export const fetchCartItem = (keyObj, id) => axios.get(`${baseUrl}/cart/${keyObj.key}/${id}`)

export const removeCartItem = (keyObj, id) => axios.delete(`${baseUrl}/cart/${keyObj.key}/${id}`)

export const updateCartItem = (keyObj, updatedCartItem) => axios.patch(`${baseUrl}/cart/${keyObj.key}/${updatedCartItem._id}`, updatedCartItem)

export const fetchReccomended = (keyObj) => axios.get(baseUrl + `/reccomended/${keyObj.key}`)

export const createGrocery = (keyObj, newGrocery) => axios.post(url + `/${keyObj.key}`, newGrocery)

export const addToCart = (keyObj, itemToAdd) => axios.post(`${baseUrl}/cart/${keyObj.key}`, itemToAdd)

export const updateGrocery = (keyObj, id, updatedGrocery) => axios.patch(`${url}/${keyObj.key}/${id}`, updatedGrocery)

export const deleteGrocery = (keyObj, id) => axios.delete(`${url}/${keyObj.key}/${id}`) 

export const deleteAllGroceries = (keyObj) => axios.delete(`${url}/${keyObj.key}`) 

export const fetchCategories = (keyObj) => axios.get(`${url}/categories/${keyObj.key}`)
