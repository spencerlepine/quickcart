import axios from "axios"
const baseUrl = 'http://localhost:5000'
// const baseUrl = "https://grocery-server-sl.herokuapp.com"
const url = baseUrl + "/groceries"

export const fetchGroceries = (keyObj, offsetObj) => axios.get(`${url}/${keyObj.key}/${offsetObj.offset}`)

export const fetchCart = (keyObj) => axios.get(`${baseUrl}/cart/${keyObj.key}`)

export const fetchCartItem = (keyObj, id) => axios.get(`${baseUrl}/cart/${keyObj.key}/${id}`)

export const removeCartItem = (keyObj, id) => axios.delete(`${baseUrl}/cart/${keyObj.key}/${id}`)

export const updateCartItem = (keyObj, updatedCartItem) => axios.patch(`${baseUrl}/cart/${keyObj.key}/${updatedCartItem._id}`, updatedCartItem)

export const fetchRecommended = (keyObj) => axios.get(baseUrl + `/recommended/${keyObj.key}`)

export const createGrocery = (keyObj, newGrocery) => axios.post(url + `/${keyObj.key}`, newGrocery)

export const addToCart = (keyObj, itemToAdd) => axios.post(`${baseUrl}/cart/${keyObj.key}`, itemToAdd)

export const updateGrocery = (keyObj, updatedGrocery) => axios.patch(`${url}/${keyObj.key}/${updatedGrocery["_id"]}`, updatedGrocery)

export const deleteGrocery = (keyObj, id) => axios.delete(`${url}/${keyObj.key}/${id}`) 

export const deleteAllGroceries = (keyObj) => axios.delete(`${url}/${keyObj.key}`) 

export const fetchCategories = (keyObj) => axios.get(`${baseUrl}/categories/${keyObj.key}`)

export const fetchGroceryCount = (keyObj) => axios.get(`${baseUrl}/count/${keyObj.key}`)
