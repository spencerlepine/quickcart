import axios from "axios"
//const url = //'https://grocery-server-sl.herokuapp.com/groceries/' //http://localhost:5000/groceries'
const baseUrl = "https://grocery-server-sl.herokuapp.com"
const url = baseUrl + "/groceries"

export const fetchGroceries = () => axios.get(url)

export const fetchReccomended = () => axios.get(baseUrl + "/reccomended")

export const createGrocery = (newGrocery) => axios.post(url, newGrocery)

export const updateGrocery = (id, updatedGrocery) => axios.patch(`${url}/${id}`, updatedGrocery)

export const deleteGrocery = (id) => axios.delete(`${url}/${id}`) 

export const deleteAll = () => axios.delete(`${url}/`) 