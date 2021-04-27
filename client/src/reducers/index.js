import { combineReducers } from "redux"

import groceries from "./groceries"
import reccomended from "./reccomended"
import selectedItem from "./selectedItem"
import cart from "./cart"
import search from "./search"
import authentication from "./authentication"
import categories from "./categories"
import selectedCategory from "./selectedCategory"

export default combineReducers({ groceries, reccomended, selectedItem, cart, search, authentication, categories, selectedCategory })