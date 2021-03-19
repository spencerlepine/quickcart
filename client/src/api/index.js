import axios from "axios"
const url = 'http://localhost:5000/groceries'

export const fetchGroceries = () => axios.get(url)

export const createGrocery = (newGrocery) => axios.post(url, newGrocery)

export const updateGrocery = (id, updatedGrocery) => axios.patch(`${url}/${id}`, updatedGrocery)

export const deleteGrocery = (id) => axios.delete(`${url}/${id}`)   