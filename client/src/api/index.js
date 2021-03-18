import axios from "axios"
const url = 'http://localhost:5000/groceries'

export const fetchGroceries = () => axios.get(url)

export const createGrocery = (newGrocery) => axios.post(url, newGrocery)
