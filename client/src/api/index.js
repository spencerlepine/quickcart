import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

axios.defaults.withCredentials = true

const baseUrl = "https://grocery-server-sl.herokuapp.com"
// "http://192.168.1.15:5000"
// process.env.BACKEND_URL
// "http://localhost:5000"

// Grocery API calls
export const fetchGroceries = (idObj, lastGroceryObj) => axios.get(`${baseUrl}/groceries/${idObj.userId}/${lastGroceryObj.lastGrocery}`)

export const createGrocery = (idObj, newGrocery) => axios.post(`${baseUrl}/groceries/${idObj.userId}`, newGrocery)

export const fetchGroceryCount = (idObj) => axios.get(`${baseUrl}/grocery-count/${idObj.userId}`)

export const deleteGrocery = (idObj, groceryNameObj) => axios.delete(`${baseUrl}/groceries/${idObj.userId}/${groceryNameObj.name}`) 

export const fetchCategories = (idObj) => axios.get(`${baseUrl}/categories/${idObj.userId}`)

export const updateGrocery = (idObj, updatedGrocery) => axios.patch(`${baseUrl}/groceries/${idObj.userId}`, updatedGrocery)


// Cart API calls
export const fetchCart = (idObj) => axios.get(`${baseUrl}/cart/${idObj.userId}`)

export const fetchCartItem = (idObj, itemNameObj) => axios.get(`${baseUrl}/cart/${idObj.userId}`, itemNameObj)

export const removeCartItem = (idObj, itemToRemove) => axios.delete(`${baseUrl}/cart/${idObj.userId}/${itemToRemove.name}`)

export const updateCartItem = (idObj, updatedCartItem) => axios.patch(`${baseUrl}/cart/${idObj.userId}`, updatedCartItem)

export const addToCart = (idObj, itemToAdd) => axios.post(`${baseUrl}/cart/${idObj.userId}`, itemToAdd)

// Recommended API calls
export const fetchRecommended = (idObj) => axios.get(baseUrl + `/recommended/${idObj.userId}`)

// User account calls
export const registerUser = (loginInfoObj) => axios.post(`${baseUrl}/auth/`, loginInfoObj)

export const loginUser = (loginInfoObj) => axios.post(`${baseUrl}/auth/login`, loginInfoObj, { withCredentials: true })

export const isUserLoggedIn = () => axios.get(`${baseUrl}/auth/loggedIn`)

export const logoutUser = () => axios.get(`${baseUrl}/auth/logout`)
