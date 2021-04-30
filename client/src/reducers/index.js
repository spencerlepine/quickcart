import { combineReducers } from "redux";

import groceries from "./groceries";
import recommended from "./recommended";
import selectedItem from "./selectedItem";
import cart from "./cart";
import search from "./search";
import authentication from "./authentication";
import categories from "./categories";
import selectedCategory from "./selectedCategory";
import connection from "./connection";

export default combineReducers({
  groceries,
  recommended,
  selectedItem,
  cart,
  search,
  authentication,
  categories,
  selectedCategory,
  connection,
});
