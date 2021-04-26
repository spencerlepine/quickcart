import mongoose from "mongoose"

export const grocerySchema = mongoose.Schema({
    name: String,
    purchase_price: mongoose.Decimal128,
    purchase_size: String,
    serving_cost: mongoose.Decimal128,
    category: String,
    last_purchased: String,
    priority: String,
    image: String,
})