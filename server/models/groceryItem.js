import mongoose from "mongoose"

const grocerySchema = mongoose.Schema({
    name: String,
    purchase_price: mongoose.Decimal128,
    purchase_size: String,
    serving: String,
    servings_per: Number,
})

const GroceryItem = mongoose.model('GroceryItem', grocerySchema)

export default GroceryItem