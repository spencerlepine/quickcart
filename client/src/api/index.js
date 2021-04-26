import axios from "axios"
// const baseUrl = 'http://localhost:5000'
const baseUrl = "https://grocery-server-sl.herokuapp.com"
const url = baseUrl + "/groceries"

export const fetchGroceries = (keyObj) => axios.get(`${url}/${keyObj.key}`)

export const fetchCart = (keyObj) => axios.get(`${baseUrl}/cart/${keyObj.key}`)

export const fetchCartItem = (keyObj, id) => axios.get(`${baseUrl}/cart/${keyObj.key}/${id}`)

export const updateCartItem = (keyObj, updatedCartItem) => axios.patch(`${baseUrl}/cart/${keyObj.key}/${updatedCartItem._id}`, updatedCartItem)

export const fetchReccomended = () => axios.get(baseUrl + "/reccomended")

export const createGrocery = (newGrocery) => axios.post(url, newGrocery)

export const addToCart = (keyObj, itemToAdd) => axios.post(`${baseUrl}/cart/${keyObj.key}`, itemToAdd)

export const updateGrocery = (id, updatedGrocery) => axios.patch(`${url}/${id}`, updatedGrocery)

export const deleteGrocery = (id) => axios.delete(`${url}/${id}`) 

export const deleteAll = () => axios.delete(`${url}/`) 