import mongoose from "mongoose"
import { grocerySchema } from "./groceryModel.js"

const GroceryItem = mongoose.model('GroceryItem', grocerySchema)

export default GroceryItem