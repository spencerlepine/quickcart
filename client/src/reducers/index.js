import { combineReducers } from "redux"

import groceries from "./groceries"
import selectedItem from "./selectedItem"

export default combineReducers({ groceries, selectedItem })