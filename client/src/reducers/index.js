import { combineReducers } from "redux"

import groceries from "./groceries"
import selectedItem from "./selectedItem"
import cart from "./cart"
import search from "./search"

export default combineReducers({ groceries, selectedItem, cart, search })