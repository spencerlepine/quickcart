import mongoose from "mongoose"
import { grocerySchema } from "./groceryModel.js"

const DemoGroceryItem = mongoose.model('DemoGroceryItem', grocerySchema)

export default DemoGroceryItem