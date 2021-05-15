import { combineReducers } from "redux"

import groceries from "./groceries"
import recommended from "./recommended"
import selectedItem from "./selectedItem"
import cart from "./cart"
import search from "./search"
import categories from "./categories"
import selectedCategory from "./selectedCategory"
import connection from "./connection"
import count from "./count"
import connectedUser from "./connectedUser"
import error from "./error"

export default combineReducers({
  groceries,
  recommended,
  selectedItem,
  cart,
  search,
  categories,
  selectedCategory,
  connection,
  count,
  connectedUser,
  error,
})
