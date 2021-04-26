import { FETCH_CART, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM } from "../constants/actionTypes.js"

const validStoredCart = () => {
    let stored = localStorage.getItem('cart')
    const parseCart = JSON.parse(stored) || []
    let valid = true

    if (parseCart === []) {
        return []
    } else if (parseCart) {
        const validKeys = ["quantity", "_id", "name", "purchase_price", "serving_cost"]
        
        // Validate each item contains these keys
        parseCart.forEach(item => {
            valid = validKeys.every(key => item.hasOwnProperty(key))
        })  
    }
    return valid ? parseCart : []
}

const reducer = (cartItems = validStoredCart(), action) => {
    switch(action.type) {
        case(FETCH_CART): 
            return action.payload
        case(ADD_TO_CART): {
            return [...cartItems, action.payload]
        } case(UPDATE_ITEM): {
            let newCart = cartItems.map((item) => (item._id === action.payload._id) ? action.payload : item)
            return newCart
        } case(REMOVE_FROM_CART): {
            let newCart = cartItems.filter((item) => (item._id === action.payload && item.quantity > 1) || item._id !== action.payload)
            return newCart
        } default:
            return cartItems      
    }
}

export default reducer