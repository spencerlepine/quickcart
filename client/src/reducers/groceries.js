import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes.js"

const reducer = (groceries = [], action) => {
    switch(action.type) {
        case(FETCH_ALL):
            return action.payload
        case(CREATE):
            return [...groceries, action.payload]
        // case(UPDATE):
        //     return groceries.map((post) => (post._id === action.payload._id ? action.payload : post))
        // case(DELETE):
        //     return groceries.filter((post) => post._id !== action.payload)
        default:
            return groceries       
    }
}

export default reducer