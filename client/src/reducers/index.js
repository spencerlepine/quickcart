import { combineReducers } from "redux"

import groceries from "./groceries"
import recommended from "./recommended"
import selectedItem from "./selectedItem"
import cart from "./cart"
import search from "./search"
import authStatus from "./authStatus"
import categories from "./categories"
import selectedCategory from "./selectedCategory"
import connection from "./connection"
import count from "./count"

export default combineReducers({
  groceries,
  recommended,
  selectedItem,
  cart,
  search,
  authStatus,
  categories,
  selectedCategory,
  connection,
  count,
})
